# node基础
## 静态资源服务器
```js
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
    return reqUrl.startsWith('/assets') || reqUrl.endsWith('.html') ? reqUrl : path.join(reqUrl, "index.html");
}
```

## 定时更新服务器
```shell
# deploy.sh
while true
do
    echo `date` >> log.txt
    git pull
    npm i
    npm run build

    mv dist dist_old
    mv  docs/.vuepress/dist dist

    rm -rf ./dist_old

    echo "完成更新:" `date +%H:%M:%S` >> log.txt

    sleepTime=`expr 60 \* 1`
    sleep ${sleepTime}
done
```