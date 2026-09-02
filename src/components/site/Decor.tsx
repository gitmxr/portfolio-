type DecorProps = { className?: string };

/** Peach line-art leaf branch, mirrors the reference's decorative side leaves. */
export function LeafBranch({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 200 700"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M40 700C40 520 60 340 110 170 128 108 152 52 178 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 640 - i * 70;
        const x = 44 + i * 7;
        const flip = i % 2 === 0;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${flip ? -35 : 35})`}>
            <path
              d={
                flip
                  ? "M0 0C34 -10 66 -2 84 22 60 46 22 40 0 0Z"
                  : "M0 0C-34 -10 -66 -2 -84 22 -60 46 -22 40 0 0Z"
              }
              fill="currentColor"
              fillOpacity="0.35"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        );
      })}
    </svg>
  );
}

/** Peach line-art coffee cup, mirrors the reference's decorative right-side teacup. */
export function CoffeeCup({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 320 300" fill="none" aria-hidden="true" className={className}>
      <path
        d="M64 96h150v72c0 41-34 74-75 74s-75-33-75-74V96Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M214 116h22a30 30 0 0 1 0 60h-22"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="139" cy="96" rx="75" ry="18" fill="currentColor" fillOpacity="0.3" />
      <path
        d="M40 252c26 14 62 20 99 20s73-6 99-20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M112 60c-14-14 6-24-4-40M144 58c-14-14 6-26-4-42M176 62c-14-14 6-24-4-40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small decorative sprig used behind section headings. */
export function Sprig({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 240 120" fill="none" aria-hidden="true" className={className}>
      <path d="M4 116C60 96 130 62 236 6" stroke="currentColor" strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse
          key={i}
          cx={40 + i * 44}
          cy={100 - i * 20}
          rx="22"
          ry="11"
          transform={`rotate(-28 ${40 + i * 44} ${100 - i * 20})`}
          fill="currentColor"
          fillOpacity="0.3"
          stroke="currentColor"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
