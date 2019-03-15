const next = require('next');
const express = require('express');
const compression = require('compression');
const {
    parse
} = require('url');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(compression());

    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        return handle(req, res, parsedUrl);
    });

    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});