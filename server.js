const next = require('next');
const express = require('express');

const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { parse } = require('url');
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    server.use(compression());

    server.get('*', (req,res) => {
        const url = parse(req.url, true);
        const { pathname, query } = url;

        console.log( "RUNS" );

        return handle(req, res, parsedUrl);


        // console.log( pathname, query );

        // if ( pathname !== route('/work/:id') ) return handle(req, res);

        
        // app.render(req, res, '/work', { ...params, ...query });
    })

    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});