import React from 'react';

type IconType = 'coffee' | 'hotdog' | 'food' | 'drink';

export function CoffeeScale({ rating, icon = 'coffee' }: { rating: number; icon?: IconType }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const glyph =
    icon === 'coffee' ? '☕️' : icon === 'hotdog' ? '🌭' : icon === 'food' ? '🍝' : '🍹';

  return (
    <div
      className="flex items-center"
      title={`${rating}/5`}
      aria-label={`Rating ${rating} out of 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) {
          return (
            <span
              key={i}
              className="inline-block text-2xl leading-none mr-0.5"
              aria-hidden="true"
            >
              {glyph}
            </span>
          );
        }

        if (i === full && hasHalf) {
          return (
            <span
              key={i}
              className="relative inline-block text-2xl w-6 h-6 leading-none mr-0.5"
              aria-hidden="true"
            >
              <span
                className="absolute inset-0 block"
                style={{ filter: 'grayscale(1) opacity(.2)' }}
              >
                {glyph}
              </span>
              <span
                className="absolute left-0 top-0 overflow-hidden block"
                style={{ width: '50%' }}
              >
                {glyph}
              </span>
            </span>
          );
        }

        return (
          <span
            key={i}
            className="inline-block text-2xl leading-none mr-0.5"
            style={{ filter: 'grayscale(1) opacity(.2)' }}
            aria-hidden="true"
          >
            {glyph}
          </span>
        );
      })}
    </div>
  );
}
