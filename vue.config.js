module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://212.64.36.110:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}
