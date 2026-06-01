interface ApertureMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function ApertureMark({ size = 80, color = '#C9A84C', className = '' }: ApertureMarkProps) {
  const r = size / 2;
  const strokeW = size * 0.09;
  const gapDeg = 13;
  const gapRad = (gapDeg / 2) * (Math.PI / 180);
  const startAngle = -Math.PI / 2 + gapRad;
  const endAngle = Math.PI * 1.5 - gapRad;

  const startX = r + r * 0.88 * Math.cos(startAngle);
  const startY = r + r * 0.88 * Math.sin(startAngle);
  const endX = r + r * 0.88 * Math.cos(endAngle);
  const endY = r + r * 0.88 * Math.sin(endAngle);

  // Aperture blades — diamond/square rotated 45 degrees
  const bladeSize = size * 0.26;
  const extBladeSize = size * 0.28; // extended blades (8% longer)
  const cx = r;
  const cy = r;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={className}
      aria-label="Nimbetics aperture mark"
    >
      {/* Outer ring with gap at 12 o'clock */}
      <path
        d={`M ${startX} ${startY} A ${r * 0.88} ${r * 0.88} 0 1 1 ${endX} ${endY}`}
        stroke={color}
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
      {/* Aperture blades — 4 blades at 45-degree diagonals */}
      {/* Top-left blade (extended) */}
      <polygon
        points={`${cx},${cy - extBladeSize} ${cx - extBladeSize * 0.45},${cy} ${cx},${cy + bladeSize * 0.2} ${cx + bladeSize * 0.2},${cy}`}
        fill={color}
        opacity="0.9"
        transform={`rotate(-45, ${cx}, ${cy})`}
      />
      {/* Bottom-right blade (extended) */}
      <polygon
        points={`${cx},${cy + extBladeSize} ${cx + extBladeSize * 0.45},${cy} ${cx},${cy - bladeSize * 0.2} ${cx - bladeSize * 0.2},${cy}`}
        fill={color}
        opacity="0.9"
        transform={`rotate(-45, ${cx}, ${cy})`}
      />
      {/* Top-right blade */}
      <polygon
        points={`${cx + bladeSize},${cy} ${cx},${cy - bladeSize * 0.45} ${cx - bladeSize * 0.2},${cy} ${cx},${cy + bladeSize * 0.2}`}
        fill={color}
        opacity="0.9"
        transform={`rotate(-45, ${cx}, ${cy})`}
      />
      {/* Bottom-left blade */}
      <polygon
        points={`${cx - bladeSize},${cy} ${cx},${cy + bladeSize * 0.45} ${cx + bladeSize * 0.2},${cy} ${cx},${cy - bladeSize * 0.2}`}
        fill={color}
        opacity="0.9"
        transform={`rotate(-45, ${cx}, ${cy})`}
      />
    </svg>
  );
}
