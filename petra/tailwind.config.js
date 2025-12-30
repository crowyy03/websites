/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                plaster: '#F9F9F7',
                'plaster-dark': '#EFECE5',
                'warm-black': '#1A1A1A',
                amber: {
                    light: '#FFD98E',
                    DEFAULT: '#FFC857',
                    dark: '#E0A830',
                },
                lemon: {
                    DEFAULT: '#FFE600',
                    dark: '#E6CF00',
                },
                aegean: {
                    light: '#3A8DDE',
                    DEFAULT: '#1C6BBA',
                    dark: '#144F8C',
                }
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
            dropShadow: {
                'niche': '0 10px 15px rgba(255, 200, 87, 0.2)',
                'lemon': '0 10px 20px rgba(255, 230, 0, 0.3)',
            },
            boxShadow: {
                'niche-inner': 'inset 0 4px 10px rgba(0,0,0,0.05)',
            }
        },
    },
    plugins: [],
}
