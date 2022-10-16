/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                "black-primary": "#0B0E15",
                "black-secondary": "#1C232B",
                "blue": "#0070E7",
                "white-primary": "#FFFFFF",
                "white-secondary": "#E0ECFF",
            }
        },
    },
    plugins: [],
}
