const path = require('path')


const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    sassLoaderOptions: {
        data: `
            @import ''
        `
    },

    webpack(config) {
        config.resolve.alias['components'] = path.join(__dirname, 'frontend/components');
        config.resolve.alias['styles'] = path.join(__dirname, 'frontend/styles');
        config.resolve.alias['utility'] = path.join(__dirname, 'frontend/utility');


        return config;
    }
})