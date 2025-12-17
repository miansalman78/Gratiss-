import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
        ghost: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
