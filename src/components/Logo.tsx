'use client';
import logo from '../assets/AskMyDoc.svg'


interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const sizeMap = {
    sm: { width: 20, height: 20 },
    md: { width: 24, height: 24 },
    lg: { width: 32, height: 32 },
    xl: { width: 40, height: 40 },
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
    const dimensions = sizeMap[size];

    return (
        <img
            src={logo}
            alt="AskMyDoc"
            width={dimensions.width}
            height={dimensions.height}
            className={className}
        />
    );
}

export default Logo;
