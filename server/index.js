const Koa = require('koa');
const serve = require('koa-static');
const fs = require('fs');
const path = require('path');
const router = require('koa-router')();
const httpProxy = require('http-proxy');
const app = new Koa();
const staticPath = path.resolve(__dirname, '../build');

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(staticPath));

const proxy = httpProxy.createProxyServer();

const getStaticFile = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log('err', err);
                reject(err);
            }
            resolve(data);
        });
    });
};
// 前端页面服务
router.get(['/', '/hello', '/hi'], async ctx => {
    const data = await getStaticFile(path.resolve(staticPath, './index.html'));
    ctx.type = 'html';
    ctx.body = data;
});

// API请求服务，代理到API Server上
router.post('/api/*', ctx => {
    proxy.web(ctx.req, ctx.res, {
        target: 'http://localhost:3030',
    });
});

app.listen(3006, () => {
    console.log('listening on port 3006');
});
