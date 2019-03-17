const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    webpack(config) {
        config.resolve.alias['app'] = path.join(process.cwd(), '/app');
        config.resolve.alias['store'] = path.join(process.cwd(), '/store');
        config.resolve.alias['services'] = path.join(process.cwd(), '/services');


        config.module.rules.push({
            test: /\.(scss|sass)$/,
            use: [{
                loader: 'sass-resources-loader',
                options: {
                    resources: [path.join(process.cwd(), '/app/styles/sass/index.scss')]
                },
            }],
        })

        return config;
    }
})