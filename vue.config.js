module.exports = {
    css: {
        extract: {
            filename: '[name].css',
            chunkFilename: '[name].css',
        },
        loaderOptions: {
            sass: {
                additionalData: `@import "@/dist/tokens/tokens.scss";`
            }
        }
    }
};
