import React from 'react';
import { StarScale } from './StarRating';
import { CoffeeScale } from './CoffeeRating'; 

type Props = {
  title: string;
  rating: number;
  scale: 'star' | 'coffee' | 'hotdog' | 'food' | 'drink';
  children: React.ReactNode;
};

export default function CollapsibleReview({ title, rating, scale, children }: Props) {
  return (
    <details className="group mb-6 rounded-md">
      <summary className="flex items-center justify-between p-3 cursor-pointer">
        <div className="flex items-center">
          <svg className="chev h-5 w-5 mr-3 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h4 className="text-1xl font-bold m-0">{title}</h4>
        </div>
        <div className="flex items-center">
          {scale === 'star' ? (
            <StarScale rating={rating} />
          ) : (
            <CoffeeScale rating={rating} icon={scale}/>
          )}
        </div>
      </summary>

      <div className="px-4 pb-4 collapsible-body">
        <div className="mb-6 leading-relaxed mt-2">{children}</div>
      </div>
    </details>
  );
}
