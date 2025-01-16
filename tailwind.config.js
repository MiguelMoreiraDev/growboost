/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "light-1": "#E5E5EF",
                "light-2": "#C7C7DC",
                "light-3": "#A7A8C8",
                "dark-1": "#363763",
                "dark-2": "#242542",
                bg: "#131322",
            },
            container: {
                center: true,
                padding: "1rem",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
        },
    },
    plugins: [],
};
