export function ArcMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle
        cx="200"
        cy="200"
        r="172"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray="76 24"
        transform="rotate(-70 200 200)"
      />
      <circle
        cx="200"
        cy="200"
        r="132"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray="64 36"
        transform="rotate(30 200 200)"
      />
    </svg>
  );
}