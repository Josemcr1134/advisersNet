module.exports = {
    content: [
        './public/**/*.html',
        './node_modules/tw-elements/dist/js/**/*.js',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],

    theme: {
        extend: {},
    },
    plugins: [
        require('tw-elements/dist/plugin'),
        require('@tailwindcss/forms'),
    ],
}