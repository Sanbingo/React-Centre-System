const Koa = require('koa');
const koaBody = require('koa-body');
const mongoose = require('mongoose');

const app = new Koa();
app.use(koaBody());

const connString = 'mongodb://localhost:27017/test';
mongoose.connect(connString, {
    useNewUrlParser: true,
});

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + connString);
});

// MongoDB连接出错后回调，这里仅输出一行日志
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

// MongoDB连接断开后回调，这里仅输出一行日志
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

// 当前进程退出之前关闭MongoDB连接
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection closed through app termination');
        process.exit(0);
    });
});

app.use(require('./article/index').routes());

app.listen(3030, () => console.log('api launching at 3030'));
