/**
 * Organic SVG dividers that flow between sections.
 * Larger viewBox heights + dramatic S-curves so they keep an organic blob
 * shape even when stretched across wide desktop viewports.
 */

export function CurveDivider({ from, to, flip = false, accent }) {
  const transform = flip ? 'scale(1, -1)' : ''
  return (
    <div className="ed-curve-divider" aria-hidden style={{ background: from, height: 160 }}>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ transform }}>
        <path
          d="M0,50 C320,200 720,-10 1080,90 C1240,140 1360,110 1440,70 L1440,160 L0,160 Z"
          fill={to}
        />
        {accent && (
          <path
            d="M240,85 Q420,140 620,75 T960,95"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        )}
      </svg>
    </div>
  )
}

export function BlobDivider({ from, to }) {
  return (
    <div className="ed-curve-divider" style={{ height: 220, background: from }} aria-hidden>
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
        <path
          d="M0,90 C260,260 540,-30 820,140 C1080,290 1280,40 1440,110 L1440,220 L0,220 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}

export function BrushStroke({ color = '#FF5A4D', className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 70"
      fill="none"
      aria-hidden
    >
      <path
        d="M5,40 C40,15 80,55 120,25 C150,5 175,40 195,30"
        stroke={color}
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M10,42 C50,20 90,50 130,30 C160,15 180,38 192,32"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}
