module.exports = {
    distDir: 'build',
    generateEtags: false,
    
    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static'
    },

    webpack: (config, {}) => {
    
        return config
    }

}