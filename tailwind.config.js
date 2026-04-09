/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7c4d6a',
                accent: '#bfa2c7',
                'bg-light': '#e5e5e5',
                'bg-dark': '#24242a',
            },
            fontFamily: {
                heading: ['"Cormorant Garamond"', 'serif'],
                body: ['Montserrat', 'sans-serif'],
                brand: ['"Afacad Flux"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
