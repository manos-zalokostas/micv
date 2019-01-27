const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const VALID_EXTENSIONS = ['.html', '.js', '.css', '.xml', '.jpg', '.png', '.mjs'];

const print = (msg) => '<html><body><h1>Error 404: ' + msg + '</h1></body></html>';

const setError = (msg, res) => {
    res.statusCode = 555;
    res.setHeader('Content-Type', 'text/html');
    res.end(print(msg));
};


const server = http.createServer((req, res) => {

        console.log('Request for ' + req.url + ' by method ' + req.method);

        let fileUrl = (req.url === '/') ? '/index.html' : req.url,
            filePath = path.resolve('./' + fileUrl);

        /*
         */
        if (req.method !== 'GET') {
            setError(req.method + ' not supported', res)
            return;
        }
        /*
         */
        let extension = path.extname(filePath);
        if (!VALID_EXTENSIONS.includes(extension)) {
            console.log('NO VALID EXTE: , >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', filePath)
            setError(fileUrl + ' not a HTML file', res);
            return;
        }
        /*
         */
        fs.exists(filePath, (exists) => {
            if (!exists) {
                setError(fileUrl + ' not available', res);
                return;
            }
            res.statusCode = 200;
            // res.setHeader('Content-Type', 'text/plain');
            if (['.js', '.mjs'].includes(extension)) {
                res.setHeader('Content-Type', 'text/javascript');
            }
            if (['.css'].includes(extension)) {
                res.setHeader('Content-Type', 'text/css');
            }

            fs.createReadStream(filePath).pipe(res);
        });

    }
);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
