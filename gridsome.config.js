module.exports = {
    siteName: 'Jonah Seguin',
    siteUrl: 'https://jonahseguin.com',
    siteDescription: "19-year-old Software Engineer from Edmonton, Alberta, Canada.",

    plugins: [
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js'
            }
        }
    ]
}