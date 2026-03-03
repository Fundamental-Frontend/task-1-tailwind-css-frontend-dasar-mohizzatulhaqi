/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: "#1C0770",
                    primary: "#261CC1",
                    secondary: "#261CC1",
                    accent: "#3A9AFF",
                    highlight: "#F1FF5E",
                },
            },
        },
    },
    plugins: [],
}
