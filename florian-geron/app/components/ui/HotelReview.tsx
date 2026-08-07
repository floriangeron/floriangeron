import React from 'react';
import { StarScale } from './StarRating';
import { StarLine } from './StarLine';

type RatingValue = number | null;

type CategoryRating = {
  title: string;
  rating: RatingValue;
};

type Props = {
  title: string;
  overallRating: number;
  categories: CategoryRating[];
  headingId?: string;
  children: React.ReactNode;
};

export default function HotelReview({
  title,
  overallRating,
  categories,
  headingId,
  children,
}: Props) {
  return (
    <details className="group mb-6 rounded-md">
      <summary className="flex items-center justify-between p-4 cursor-pointer">
        <div className="flex items-center">
          <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h4 id={headingId} className="text-1xl font-bold m-0">{title}</h4>
        </div>
        <div className="flex items-center">
          <StarScale rating={overallRating} />
        </div>
      </summary>

      <div className="px-4 pb-4 collapsible-body">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
            {categories.map((category) => (
              <div key={category.title} className="flex items-center">
                <StarLine rating={category.rating} max={10} title={category.title} />
              </div>
            ))}
          </div>
        </div>

        <p className="mb-6 leading-relaxed mt-2">{children}</p>
      </div>
    </details>
  );
}
