import React from 'react';

const Button: React.FC<{ onClick?: () => void; className?: string; children: React.ReactNode }> = props => {
    return (
        <button
            className={`${props.className} rounded-lg bg-blue text-white-primary text-lg font-bold hover:bg-transparent hover:border-blue border-2 hover:text-blue border-transparent transition-all duration-300`}
        >
            {props.children}
        </button>
    );
};

export default Button;
