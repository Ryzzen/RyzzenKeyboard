module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    1: { type: 'net', value: undefined },
    2: { type: 'net', value: undefined },
    3: { type: 'net', value: undefined },
    4: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint MX_SK6812MINI-E_REV`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Add-on for regular MX-footprints with SK6812 MINI-E")`);
fp.push(`(tags "cherry MX SK6812 Mini-E rearmount rear mount led rgb backlight")`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd roundrect (at 2.6 ${flipN(flip, 5.83)} ${flipR(flip, p.r + 90)}) (size 0.82 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask") (roundrect_rratio 0.1) ${p.1})`);
fp.push(`(pad "2" smd roundrect (at 2.6 ${flipN(flip, 4.33)} ${flipR(flip, p.r + 90)}) (size 0.82 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask") (roundrect_rratio 0.1) ${p.2})`);
fp.push(`(pad "4" smd roundrect (at -2.6 ${flipN(flip, 5.83)} ${flipR(flip, p.r + 90)}) (size 0.82 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask") (roundrect_rratio 0.1) ${p.4})`);
fp.push(`(pad "3" smd roundrect (at -2.6 ${flipN(flip, 4.33)} ${flipR(flip, p.r + 90)}) (size 0.82 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask") (roundrect_rratio 0.1) ${p.3})`);

// Drawings on B.CrtYd
fp.push(`(fp_line (start 3.8 ${flipN(flip, 7.08)}) (end 3.8 ${flipN(flip, 3.08)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.8 ${flipN(flip, 3.08)}) (end -3.8 ${flipN(flip, 3.08)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.8 ${flipN(flip, 3.08)}) (end -3.8 ${flipN(flip, 7.08)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.8 ${flipN(flip, 7.08)}) (end 3.8 ${flipN(flip, 7.08)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);

// Drawings on Edge.Cuts
fp.push(`(fp_line (start -0.794452 ${flipN(flip, 3.58)}) (end 0.794452 ${flipN(flip, 3.58)}) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_line (start -1.699999 ${flipN(flip, 5.782842)}) (end -1.699999 ${flipN(flip, 4.377158)}) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_line (start 0.794452 ${flipN(flip, 6.579999)}) (end -0.794453 ${flipN(flip, 6.579999)}) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_line (start 1.699999 ${flipN(flip, 4.377158)}) (end 1.699999 ${flipN(flip, 5.782842)}) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start 1.298969 ${flipN(flip, 3.943403)}) (end 1.749484 ${flipN(flip, 4.16028)}) (angle -146.0053744) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start 2.199999 ${flipN(flip, 4.377158)}) (end 1.749484 ${flipN(flip, 4.16028)}) (angle -25.70611205) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start 2.199999 ${flipN(flip, 5.782842)}) (end 1.699999 ${flipN(flip, 5.782842)}) (angle -25.70611954) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start 1.298969 ${flipN(flip, 6.216598)}) (end 1.046711 ${flipN(flip, 6.648299)}) (angle -146.0054017) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start 0.794452 ${flipN(flip, 7.079999)}) (end 1.046711 ${flipN(flip, 6.648299)}) (angle -30.29928212) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start -0.794453 ${flipN(flip, 7.079999)}) (end -0.794453 ${flipN(flip, 6.579999)}) (angle -30.29922831) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start -1.298969 ${flipN(flip, 6.216597)}) (end -1.749484 ${flipN(flip, 5.99972)}) (angle -146.0053097) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start -2.199999 ${flipN(flip, 5.782842)}) (end -1.749484 ${flipN(flip, 5.99972)}) (angle -25.70608136) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start -2.199999 ${flipN(flip, 4.377158)}) (end -1.699999 ${flipN(flip, 4.377158)}) (angle -25.70617777) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start -1.298969 ${flipN(flip, 3.943402)}) (end -1.046711 ${flipN(flip, 3.511701)}) (angle -146.0055121) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start -0.794452 ${flipN(flip, 3.08)}) (end -1.046711 ${flipN(flip, 3.511701)}) (angle -30.29933433) (layer "Edge.Cuts") (width 0.1))`);
fp.push(`(fp_arc (start 0.794452 ${flipN(flip, 3.08)}) (end 0.794452 ${flipN(flip, 3.58)}) (angle -30.2992623) (layer "Edge.Cuts") (width 0.1))`);

// Drawings on F.Fab
fp.push(`(fp_text value MX_SK6812MINI-E_REV (at -0.65 ${flipN(flip, 8.55)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on B.SilkS
fp.push(`(fp_poly (pts (xy -4.2 ${flipN(flip, 4.08)}) (xy -3.3 ${flipN(flip, 3.18)}) (xy -4.2 ${flipN(flip, 3.18)})) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.1))`);
fp.push(`(fp_text user 1 (at 2.5 ${flipN(flip, 7.08)} ${flipR(flip, p.r + 90) % 180}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") hide (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);

// Drawings on F.SilkS
fp.push(`(fp_text reference REF** (at -7.2 ${flipN(flip, 7.15)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") hide (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on Dwgs.User
fp.push(`(fp_line (start -1.6 ${flipN(flip, 4.18)}) (end -1.1 ${flipN(flip, 3.68)}) (layer "Dwgs.User") (width 0.12))`);
fp.push(`(fp_line (start -1.6 ${flipN(flip, 4.18)}) (end -1.6 ${flipN(flip, 6.48)}) (layer "Dwgs.User") (width 0.12))`);
fp.push(`(fp_line (start 1.6 ${flipN(flip, 3.68)}) (end -1.1 ${flipN(flip, 3.68)}) (layer "Dwgs.User") (width 0.12))`);
fp.push(`(fp_line (start 1.6 ${flipN(flip, 6.48)}) (end 1.6 ${flipN(flip, 3.68)}) (layer "Dwgs.User") (width 0.12))`);
fp.push(`(fp_line (start -1.6 ${flipN(flip, 6.48)}) (end 1.6 ${flipN(flip, 6.48)}) (layer "Dwgs.User") (width 0.12))`);
fp.push(`(fp_line (start -9.525 ${flipN(flip, 9.525)}) (end -9.525 ${flipN(flip, -9.525)}) (layer "Dwgs.User") (width 0.15))`);
fp.push(`(fp_line (start 9.525 ${flipN(flip, 9.525)}) (end -9.525 ${flipN(flip, 9.525)}) (layer "Dwgs.User") (width 0.15))`);
fp.push(`(fp_line (start 9.525 ${flipN(flip, -9.525)}) (end 9.525 ${flipN(flip, 9.525)}) (layer "Dwgs.User") (width 0.15))`);
fp.push(`(fp_line (start -9.525 ${flipN(flip, -9.525)}) (end 9.525 ${flipN(flip, -9.525)}) (layer "Dwgs.User") (width 0.15))`);

// 3D Models
fp.push(`(model \${KISYS3DMOD}/LED_SMD.3dshapes/LED_SK6812MINI_PLCC4_3.5x3.5mm_P1.75mm.wrl (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

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

