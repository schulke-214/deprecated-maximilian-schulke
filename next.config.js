const path = require('path')

const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config) {
        config.resolve.alias['@'] = path.join(process.cwd(), '/app');
        config.resolve.alias['store'] = path.join(process.cwd(), '/store');


        config.module.rules.push({
            test: /\.(scss|sass)$/,
            use: [{
                loader: 'sass-resources-loader',
                options: {
                    resources: path.join(process.cwd(), '/app/ressources/style-system/default.scss')
                },
            }, ],
        })

        return config;
    }
})