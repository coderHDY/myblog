const path = require("path");
const fs = require("fs");
const http = require("http");
const port = 8088;
const server = http.createServer((request, response) => {
    const reqPath = getRealPath(request.url);

    const reqUrl = path.join(__dirname, "./dist", reqPath);

    const responseFile = fs.readFileSync(reqUrl);
    response.end(responseFile);
});

server.listen(port, (error) => {
    if (error) {
        fs.appendFile('log.txt', error, 'utf-8', () => {});
    }
});

function getRealPath(reqUrl) {
    return reqUrl.startsWith('/assets') || reqUrl.endsWith('.html') || reqUrl.endsWith('.js') ? reqUrl : path.join(reqUrl, "index.html");
}