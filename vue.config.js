const argv = require('minimist')(process.argv.slice(2));

const ownProxy = [
    { domain: `wx`, target: `https://api.weixin.qq.com` },
    // { domain: 'wx', target: 'https://api.weixin.qq.com/card/create' }
    { domain: `wxown`, target: `http://devmp.chidaoni.com` },
    { domain: `so`, target: `http://devso.chidaoni.net` },
]

const proxy = {};
ownProxy.forEach(el => {
    const proxyConfig = `/_/${el.domain}`;
    proxy[proxyConfig] = {
        target: el.target,
        changOrigin: true,
        pathRewrite (path, req) {
            console.log(path,proxyConfig);
            return path.replace(proxyConfig, '');
        },
    }
})



module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/wxbase' : '/',
    outputDir: argv.dist,
    assetsDir: 'static',
    productionSourceMap: process.env.NODE_ENV === 'production' || argv.env === 'dev',
    // chainWebpack: (config) => {
    //   config.entry('app').add('./src/public-path.js').end();
    // },
    devServer: {
        open: process.platform === 'darwin',
        host: 'localhost',
        // 'dev.user2.chidaoni.com',
        port: 8080,
        https: false,
        hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy,
    },
  }