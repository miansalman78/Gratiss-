import React from 'react';
import Image from 'next/image';
import { Item } from '@/store/useStore';

interface CardProps {
    item: Item;
    onClick?: () => void;
    onSaveClick?: (e: React.MouseEvent) => void;
    isSaved?: boolean;
}

export const Card: React.FC<CardProps> = ({ item, onClick, onSaveClick, isSaved = false }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
        >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Save Button */}
                {onSaveClick && (
                    <button
                        onClick={onSaveClick}
                        className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 z-10"
                        aria-label={isSaved ? 'Remove from saved' : 'Add to saved'}
                    >
                        <svg
                            className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : 'fill-none text-gray-700'}`}
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                )}

                {/* Featured Badge */}
                {item.isFeatured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category */}
                <div className="text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wide">
                    {item.category}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                    </div>

                    {/* Price */}
                    {item.price && (
                        <div className="text-lg font-bold text-gray-900">
                            ${item.price}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
