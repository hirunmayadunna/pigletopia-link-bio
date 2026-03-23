/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    '100%': { transform: 'translateX(100%)' }
                }
            },
            animation: {
                shimmer: 'shimmer 2s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
};