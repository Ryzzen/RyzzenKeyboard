module.exports = {
  params: {
    designator: 'XX',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SW_Cherry_MX_PCB_Mag_1.00u"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Cherry MX keyswitch, https://www.cherrymx.de/en/dev.html")`);
fp.push(`(tags "Cherry MX Keyboard Keyswitch Switch PCB 1.00u")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" np_thru_hole circle (at -5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask") )`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -7.25 ${flipN(flip, -7.25)}) (end -7.25 ${flipN(flip, 7.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -7.25 ${flipN(flip, 7.25)}) (end 7.25 ${flipN(flip, 7.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 7.25 ${flipN(flip, -7.25)}) (end -7.25 ${flipN(flip, -7.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 7.25 ${flipN(flip, 7.25)}) (end 7.25 ${flipN(flip, -7.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start -7 ${flipN(flip, -7)}) (end -7 ${flipN(flip, 7)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -7 ${flipN(flip, 7)}) (end 7 ${flipN(flip, 7)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 7 ${flipN(flip, -7)}) (end -7 ${flipN(flip, -7)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 7 ${flipN(flip, 7)}) (end 7 ${flipN(flip, -7)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -7.1 ${flipN(flip, -7.1)}) (end -7.1 ${flipN(flip, 7.1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -7.1 ${flipN(flip, 7.1)}) (end 7.1 ${flipN(flip, 7.1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 7.1 ${flipN(flip, -7.1)}) (end -7.1 ${flipN(flip, -7.1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 7.1 ${flipN(flip, 7.1)}) (end 7.1 ${flipN(flip, -7.1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Dwgs.User
fp.push(`(fp_line (start -9.525 ${flipN(flip, -9.525)}) (end -9.525 ${flipN(flip, 9.525)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -9.525 ${flipN(flip, 9.525)}) (end 9.525 ${flipN(flip, 9.525)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start 9.525 ${flipN(flip, -9.525)}) (end -9.525 ${flipN(flip, -9.525)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start 9.525 ${flipN(flip, 9.525)}) (end 9.525 ${flipN(flip, -9.525)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);

// 3D Models
fp.push(`(model "\${KEYSWITCH_LIB_3D}/Switch_Keyboard_Cherry_MX.3dshapes/SW_Cherry_MX_PCB.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -8)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SW_Cherry_MX_PCB_Mag_1.00u" (at 0 ${flipN(flip, 8)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

