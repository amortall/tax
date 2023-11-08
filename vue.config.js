const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:9090/',//接口的前缀
                ws:true,//代理websocked
                changeOrigin:true,//虚拟的站点需要更管origin
                pathRewrite:{
                    '^/api':''//重写路径
                }
            }
        }
    },
    transpileDependencies: true
})
