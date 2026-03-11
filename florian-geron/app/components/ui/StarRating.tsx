import React from 'react';

export function StarScale({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return (
    <div
      className="flex items-center"
      title={`${rating}/5`}
      aria-label={`Rating ${rating} out of 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const path =
          'M12 .587l3.668 7.431L23.327 9.75l-5.66 5.517L18.999 23 12 19.771 5.001 23l1.331-7.733L.672 9.75l7.659-1.732L12 .587z';

        if (i < fullStars) {
          return (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={path} />
            </svg>
          );
        }

        if (i === fullStars && hasHalf) {
          const gradId = `half-grad-${i}`;
          return (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={gradId} x1="0" x2="1">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <path d={path} fill={`url(#${gradId})`} />
            </svg>
          );
        }

        return (
          <svg
            key={i}
            className="w-5 h-5 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={path} />
          </svg>
        );
      })}
    </div>
  );
}
