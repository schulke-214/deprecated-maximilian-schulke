const path = require('path')


const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config) {
        config.resolve.alias['@'] = path.join(process.cwd(), 'components');
        config.resolve.alias['components'] = path.join(process.cwd(), 'frontend/components');
        config.resolve.alias['styles'] = path.join(process.cwd(), 'frontend/styles');
        config.resolve.alias['utility'] = path.join(process.cwd(), 'frontend/utility');

        config.module.rules.push({
            test: /\.(scss|sass)$/,
            use: [{
                loader: 'sass-resources-loader',
                options: {
                    resources: path.join(process.cwd(), 'frontend/styles/default.scss')
                },
            }, ],
        })

        return config;
    }
})