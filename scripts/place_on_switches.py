import math
import re

import pcbnew
import wx

# -------------------------
# Dialog helpers
# -------------------------


def ask_string(parent, title, prompt, default):
    dlg = wx.TextEntryDialog(parent, prompt, title, default)
    try:
        if dlg.ShowModal() != wx.ID_OK:
            return None
        return dlg.GetValue()
    finally:
        dlg.Destroy()


def ask_float(parent, title, prompt, default):
    s = ask_string(parent, title, prompt, str(default))
    if s is None:
        return None
    try:
        return float(s)
    except ValueError:
        wx.MessageBox("Invalid number", "Error", wx.OK | wx.ICON_ERROR)
        return None


def ask_bool(parent, title, prompt, default=True):
    style = wx.YES_NO | wx.ICON_QUESTION
    style |= wx.YES_DEFAULT if default else wx.NO_DEFAULT
    return wx.MessageBox(prompt, title, style) == wx.YES


# -------------------------
# Geometry helpers
# -------------------------


def vec_xy(v):
    if hasattr(v, "x"):
        return int(v.x), int(v.y)
    return int(v.GetX()), int(v.GetY())


def angle_rad(a):
    if hasattr(a, "AsRadians"):
        return a.AsRadians()
    if hasattr(a, "AsDegrees"):
        return math.radians(a.AsDegrees())
    return math.radians(float(a) / 10.0)


def add_180(angle):
    if hasattr(angle, "AsDegrees"):
        return pcbnew.EDA_ANGLE(angle.AsDegrees() + 180, pcbnew.DEGREES_T)
    return angle + 1800


def rotate_vec(v, angle):
    x, y = vec_xy(v)
    r = angle_rad(angle)
    c = math.cos(r)
    s = math.sin(r)
    return pcbnew.VECTOR2I(
        int(round(x * c - y * s)),
        int(round(x * s + y * c)),
    )


# -------------------------
# Action Plugin
# -------------------------


class PlaceOnSwitchesPlugin(pcbnew.ActionPlugin):
    def defaults(self):
        self.name = "Move footprints onto switches (by page order)"
        self.category = "Modify PCB"
        self.description = (
            "Move footprints onto switches; targets ordered by schematic page number"
        )

    def Run(self):
        board = pcbnew.GetBoard()
        parent = None  # KiCad 9 safe

        switch_prefix = ask_string(
            parent,
            "Move onto switches",
            "Switch reference prefix (e.g. SW, SWITCH):",
            "SWITCH",
        )
        if switch_prefix is None:
            return

        target_prefix = ask_string(
            parent,
            "Move onto switches",
            "Target footprint prefix (e.g. D):",
            "D",
        )
        if target_prefix is None:
            return

        offset_x_mm = ask_float(parent, "Move onto switches", "Offset X (mm):", 0)
        if offset_x_mm is None:
            return

        offset_y_mm = ask_float(parent, "Move onto switches", "Offset Y (mm):", 0)
        if offset_y_mm is None:
            return

        match_rotation = ask_bool(
            parent,
            "Move onto switches",
            "Match switch rotation (handles back-side)?",
            True,
        )

        offset = pcbnew.VECTOR2I(
            pcbnew.FromMM(offset_x_mm),
            pcbnew.FromMM(offset_y_mm),
        )

        switches = {}
        targets_by_page = {}

        # Scan footprints
        for fp in board.GetFootprints():
            ref = fp.GetReference()

            m = re.search(r"\d+", ref)
            if not m:
                continue

            num = int(m.group())

            if ref.startswith(switch_prefix):
                switches[num] = fp

            elif ref.startswith(target_prefix):
                page = num // 1000
                targets_by_page.setdefault(page, []).append((num, fp))

        if not switches:
            wx.MessageBox("No switches found", "Error", wx.OK | wx.ICON_ERROR)
            return

        if not targets_by_page:
            wx.MessageBox("No target footprints found", "Error", wx.OK | wx.ICON_ERROR)
            return

        # Sort switches by reference number
        sorted_switches = sorted(switches.items())

        # Sort targets by page, then by reference number
        sorted_targets = []
        for page in sorted(targets_by_page.keys()):
            page_targets = sorted(targets_by_page[page], key=lambda x: x[0])
            sorted_targets.extend(fp for _, fp in page_targets)

        moved = 0

        for (sw_num, sw), tgt in zip(sorted_switches, sorted_targets):
            if match_rotation:
                angle = sw.GetOrientation()
                off_angle = angle

                if sw.IsFlipped():
                    angle = add_180(angle)
                    tgt.SetLayer(pcbnew.B_Cu)
                else:
                    tgt.SetLayer(pcbnew.F_Cu)

                tgt.SetOrientation(angle)

                off = rotate_vec(offset, off_angle)

                if sw.IsFlipped():
                    ox, oy = vec_xy(off)
                    off = pcbnew.VECTOR2I(-ox, oy)

                pos = sw.GetPosition() + off
            else:
                pos = sw.GetPosition() + offset

            tgt.SetPosition(pos)
            moved += 1

        pcbnew.Refresh()
        wx.MessageBox(f"Moved {moved} footprints", "Done", wx.OK | wx.ICON_INFORMATION)


PlaceOnSwitchesPlugin().register()
