import React from 'react';

export function CoffeeScale({ rating }: { rating: number }) {
  const fullCups = Math.floor(rating);
  const hasHalf = rating - fullCups >= 0.5;
  const cup = '☕️';

  return (
    <div
      className="flex items-center"
      title={`${rating}/5`}
      aria-label={`Rating ${rating} out of 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullCups) {
          return (
            <span
              key={i}
              className="inline-block text-2xl leading-none mr-0.5"
              aria-hidden="true"
            >
              {cup}
            </span>
          );
        }

        if (i === fullCups && hasHalf) {
          return (
            <span
              key={i}
              className="relative inline-block w-5 h-5 leading-none mr-0.5"
              aria-hidden="true"
            >
              <span
                className="absolute inset-0 block"
                style={{ filter: 'grayscale(1) opacity(.2)' }}
              >
                {cup}
              </span>
              <span
                className="absolute left-0 top-0 overflow-hidden block"
                style={{ width: '50%' }}
              >
                {cup}
              </span>
            </span>
          );
        }

        return (
          <span
            key={i}
            className="inline-block text-2xl leading-none mr-0.5"
            style={{ filter: 'grayscale(1) opacity(.5)' }}
            aria-hidden="true"
          >
            {cup}
          </span>
        );
      })}
    </div>
  );
}
