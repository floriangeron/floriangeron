import React from 'react';

export function StarLine({
  rating,
  max = 10,
  className = '',
  title,
}: {
  rating: number;
  max?: number;
  className?: string;
  title?: string;
}) {
  const clamped = Math.max(0, Math.min(rating, max));
  const percent = (clamped / max) * 100;

  return (
    <div className={`w-full ${className}`} title={`${clamped}/${max}`} aria-label={`Rating ${clamped} out of ${max}`} role="img">
      <div className="relative h-16 pr-16">

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between text-sm text-gray-600">
          <div className="text-left">{title}</div>
          <div className="text-right">{clamped}/{max}</div>
        </div>

        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <div className="h-1 bg-gray-200 rounded-full" />
        </div>

        <div
          className="absolute left-0 top-1/2 flex items-center"
          style={{ left: `${percent}%`, transform: 'translate(-50%, -50%)' }}
        >
          <svg
            className="w-6 h-6 text-yellow-400 drop-shadow-sm"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minWidth: '1.5rem', minHeight: '1.5rem' }}
          >
            <path d="M12 .587l3.668 7.431L23.327 9.75l-5.66 5.517L18.999 23 12 19.771 5.001 23l1.331-7.733L.672 9.75l7.659-1.732L12 .587z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
