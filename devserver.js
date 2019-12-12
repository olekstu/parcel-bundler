const Bundler = require('parcel-bundler');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({
    target: 'http://localhost:9266/CustomerApiEndpoint/api',
    pathRewrite: {
        "^/api": ""
    },
    changeOrigin: true
}))

app.use(express.static('/dist'));


const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

app.listen(1234, () => console.log("Dev server started"));
