module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    1: { type: 'net', value: undefined },
    2: { type: 'net', value: undefined },
    3: { type: 'net', value: undefined },
    4: { type: 'net', value: undefined },
    5: { type: 'net', value: undefined },
    6: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SOT95P280X135-6N"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "CT100LW-IS6")`);
fp.push(`(tags "Integrated Circuit")`);
fp.push(`(attr smd)`);

// Pads
fp.push(`(pad "1" smd rect (at -1.25 ${flipN(flip, -0.95)} ${flipR(flip, p.r + 90)}) (size 0.65 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.1})`);
fp.push(`(pad "2" smd rect (at -1.25 ${flipN(flip, 0)} ${flipR(flip, p.r + 90)}) (size 0.65 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.2})`);
fp.push(`(pad "3" smd rect (at -1.25 ${flipN(flip, 0.95)} ${flipR(flip, p.r + 90)}) (size 0.65 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.3})`);
fp.push(`(pad "4" smd rect (at 1.25 ${flipN(flip, 0.95)} ${flipR(flip, p.r + 90)}) (size 0.65 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.4})`);
fp.push(`(pad "5" smd rect (at 1.25 ${flipN(flip, 0)} ${flipR(flip, p.r + 90)}) (size 0.65 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.5})`);
fp.push(`(pad "6" smd rect (at 1.25 ${flipN(flip, -0.95)} ${flipR(flip, p.r + 90)}) (size 0.65 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.6})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -2.125 ${flipN(flip, -1.75)}) (end 2.125 ${flipN(flip, -1.75)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.125 ${flipN(flip, -1.75)}) (end 2.125 ${flipN(flip, 1.75)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 2.125 ${flipN(flip, 1.75)}) (end -2.125 ${flipN(flip, 1.75)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -2.125 ${flipN(flip, 1.75)}) (end -2.125 ${flipN(flip, -1.75)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);

// Drawings on F.Fab
fp.push(`(fp_text user %R (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1.27 1.27) (thickness 0.254)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_line (start -0.8 ${flipN(flip, -1.45)}) (end 0.8 ${flipN(flip, -1.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1))`);
fp.push(`(fp_line (start 0.8 ${flipN(flip, -1.45)}) (end 0.8 ${flipN(flip, 1.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1))`);
fp.push(`(fp_line (start 0.8 ${flipN(flip, 1.45)}) (end -0.8 ${flipN(flip, 1.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1))`);
fp.push(`(fp_line (start -0.8 ${flipN(flip, 1.45)}) (end -0.8 ${flipN(flip, -1.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1))`);
fp.push(`(fp_line (start -0.8 ${flipN(flip, -0.5)}) (end 0.15 ${flipN(flip, -1.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1))`);

// Drawings on F.SilkS
fp.push(`(fp_text reference IC** (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1.27 1.27) (thickness 0.254)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text value "SOT95P280X135-6N" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") hide (effects (font (size 1.27 1.27) (thickness 0.254)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_line (start -0.275 ${flipN(flip, -1.45)}) (end 0.275 ${flipN(flip, -1.45)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2))`);
fp.push(`(fp_line (start 0.275 ${flipN(flip, -1.45)}) (end 0.275 ${flipN(flip, 1.45)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2))`);
fp.push(`(fp_line (start 0.275 ${flipN(flip, 1.45)}) (end -0.275 ${flipN(flip, 1.45)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2))`);
fp.push(`(fp_line (start -0.275 ${flipN(flip, 1.45)}) (end -0.275 ${flipN(flip, -1.45)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2))`);
fp.push(`(fp_line (start -1.875 ${flipN(flip, -1.625)}) (end -0.625 ${flipN(flip, -1.625)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.2))`);

// 3D Models
fp.push(`(model CT100LW-IS6.stp (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

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

