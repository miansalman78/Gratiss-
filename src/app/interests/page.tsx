'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const categories = [
    {
        id: 'beauty-food',
        name: 'Beauty & Food',
        color: '#FF6B6B', // Soft Red
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
    {
        id: 'electronics',
        name: 'Electronics',
        color: '#4ECDC4', // Turquoise
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        id: 'fashion',
        name: 'Fashion',
        color: '#D4A5A5', // Soft Pink
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 'home-garden',
        name: 'Home & Garden',
        color: '#96CEB4', // Sage Green
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        id: 'books-media',
        name: 'Books & Media',
        color: '#FFD93D', // Golden Yellow
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        id: 'toys-games',
        name: 'Toys & Games',
        color: '#6C5CE7', // Purple
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
    },
    {
        id: 'sports-outdoors',
        name: 'Sports & Outdoors',
        color: '#FF9F43', // Orange
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: 'health-wellness',
        name: 'Health & Wellness',
        color: '#17B8A6', // Original Teal
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
];

export default function Interests() {
    const router = useRouter();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const toggleCategory = (categoryId: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleContinue = () => {
        // You can save the selected categories to a database or local storage here
        console.log('Selected categories:', selectedCategories);
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-[#f0f9f8] flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-2xl w-full">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-3">
                    What interests you?
                </h1>

                {/* Subtitle */}
                <p className="text-center text-gray-600 text-base mb-10">
                    Select categories to personalize your feed
                </p>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {categories.map((category) => {
                        const isSelected = selectedCategories.includes(category.id);

                        return (
                            <button
                                key={category.id}
                                onClick={() => toggleCategory(category.id)}
                                style={{
                                    backgroundColor: isSelected ? `${category.color}1A` : 'white', // 1A = 10% opacity
                                    borderColor: isSelected ? category.color : 'rgb(229, 231, 235)', // gray-200
                                    boxShadow: isSelected ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : undefined
                                }}
                                className={`
                                    relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer
                                    flex flex-col items-center justify-center gap-3
                                    ${!isSelected && 'hover:border-gray-300 hover:shadow-sm'}
                                `}
                            >
                                {/* Checkmark for selected */}
                                {isSelected && (
                                    <div
                                        className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: category.color }}
                                    >
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    style={{ color: isSelected ? category.color : 'rgb(156, 163, 175)' }} // gray-400
                                >
                                    {category.icon}
                                </div>

                                {/* Category Name */}
                                <span className={`text-sm font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                                    {category.name}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Selected Count */}
                <p className="text-center text-sm text-gray-600 mb-6">
                    <span className={selectedCategories.length > 0 ? 'text-[#17B8A6] font-semibold' : ''}>
                        {selectedCategories.length}
                    </span>
                    {' '}categories selected
                </p>

                {/* Continue Button */}
                <button
                    onClick={handleContinue}
                    className="w-full bg-[#17B8A6] text-white text-base font-semibold py-4 rounded-full shadow-md hover:shadow-lg hover:bg-[#15a394] transition-all duration-200 cursor-pointer"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
