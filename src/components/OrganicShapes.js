/**
 * Organic SVG dividers that flow between sections.
 * Each accepts a `from` and `to` color matching the surrounding sections.
 */

export function CurveDivider({ from, to, flip = false, accent }) {
  const transform = flip ? 'scale(1, -1)' : ''
  return (
    <div className="ed-curve-divider" aria-hidden style={{ background: from }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ transform }}>
        <path
          d="M0,0 C320,90 640,90 720,50 C800,10 1120,10 1440,80 L1440,100 L0,100 Z"
          fill={to}
        />
        {accent && (
          <path
            d="M180,40 Q280,70 380,38 T580,42"
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
    <div className="ed-curve-divider" style={{ height: 140, background: from }} aria-hidden>
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path
          d="M0,0 C200,100 400,140 720,90 C1040,40 1240,80 1440,30 L1440,140 L0,140 Z"
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
