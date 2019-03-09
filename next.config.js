const path = require('path')

const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config) {
        config.resolve.alias['app'] = path.join(process.cwd(), '/app');
        config.resolve.alias['store'] = path.join(process.cwd(), '/store');
        config.resolve.alias['services'] = path.join(process.cwd(), '/services');


        config.module.rules.push({
            test: /\.(scss|sass)$/,
            use: [{
                loader: 'sass-resources-loader',
                options: {
                    resources: path.join(process.cwd(), '/app/scss/global/default.scss')
                },
            }, ],
        })

        return config;
    }
})