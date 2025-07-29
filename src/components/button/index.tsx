import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    className?: string;
    children?: React.ReactNode;
}

function Button({ text, className = '', children, ...rest }: ButtonProps) {
    return (
        <button
        {...rest}
        className={`bg-secundary-dark p-6 py-4 font-bold text-black font-imprint text-xs md:text-md lg:text-lg uppercase hover:bg-secundary-ligth duration-200 transition-colors cursor-pointer w-full ${className}`}
        >
        {children ?? text}
        </button>
    );
}

export default Button;