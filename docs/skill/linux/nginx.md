---
title: nginx
date: 2021-12-23
---
## 基础命令
* 安装
  ```shell
  brew install nginx
  ```
* 查看版本
  ```shell
  nginx -v
  ```
* 启动
  ```shell
  nginx
  ```
* 重启
  ```shell
  nginx-s reopen
  ```
* 关闭
  ```shell
  nginx -s stop
  ```
* 退出
  ```shell
  nginx-s quit
  ```
* 找到配置文件夹`nginx.conf`
  ```shell
  open /opt/homebrew/etc/nginx/
  ```
* 修改配置文件
  ```shell
  vim nginx.conf
  ```
* 配置重载
  ```shell
  nginx -s reload

  # systemctl reload nginx
  ```

## 其他
:::: steps
::: step
* 安装
  ```shell
  yum install -y nginx
  ```

:::
::: step
* 启动
  ```shell
  systemctl start nginx
  ```
:::
::: step
* 设置为在系统启动时自动启动
  ```shell
  systemctl enable nginx
  ```
:::
::: step
* index.html 文件，放在 /home/www/website/ 目录下
  ```shell
  # 创建目录
  mkdir -p /home/www/website
  ```
:::
::::
## 配置反向代理
1. 域名
2. ssl证书
3. 开启服务器
4. nginx反向代理
```shell
user  www www;
worker_processes auto;
error_log  /www/wwwlogs/nginx_error.log  crit;
pid        /www/server/nginx/logs/nginx.pid;
worker_rlimit_nofile 51200;

events
    {
        use epoll;
        worker_connections 51200;
        multi_accept on;
    }

http
    {
        include       mime.types;
        #include luawaf.conf;

        include proxy.conf;

        default_type  application/octet-stream;

        server_names_hash_bucket_size 512;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 50m;

        sendfile   on;
        tcp_nopush on;

        keepalive_timeout 60;

        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;
        fastcgi_intercept_errors on;

        gzip on;
        gzip_min_length  1k;
        gzip_buffers     4 16k;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   "MSIE [1-6]\.";

        limit_conn_zone $binary_remote_addr zone=perip:10m;
        limit_conn_zone $server_name zone=perserver:10m;

        server_tokens off;
        access_log off;

server
    {
        listen 80;
        listen 443 ssl http2;
        server_name node-server;
        index index.html index.htm index.php;
        #SSL-START SSL相关配置
        #error_page 404/404.html;
        ssl_certificate    /www/server/panel/vhost/cert/server/fullchain.pem;
        ssl_certificate_key    /www/server/panel/vhost/cert/server/privkey.pem;
        ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
        ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
        ssl_prefer_server_ciphers on;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;
        add_header Strict-Transport-Security "max-age=31536000";
        error_page 497  https://$host$request_uri;
        #HTTP_TO_HTTPS_START
        if ($server_port !~ 443){
            rewrite ^(/.*)$ https://$host$1 permanent;
        }
        #HTTP_TO_HTTPS_END
        #SSL-END

        #ERROR-PAGE-START  错误页相关配置
        #error_page 404 /404.html;
        #error_page 502 /502.html;
        #ERROR-PAGE-END


        #REWRITE-START 伪静态相关配置
        include /www/server/panel/vhost/rewrite/node_server.conf;
        #REWRITE-END

        #禁止访问的文件或目录
        location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md|package.json|package-lock.json|\.env) {
            return 404;
        }

        #一键申请SSL证书验证目录相关设置
        location /.well-known/ {
            root  /www/wwwroot/hdy.gh520.xyz;
        }

        #禁止在证书验证目录放入敏感文件
        if ( $uri ~ "^/\.well-known/.*\.(php|jsp|py|js|css|lua|ts|go|zip|tar\.gz|rar|7z|sql|bak)$" ) {
            return 403;
        }
            # HTTP反向代理相关配置开始 >>>
                location ~ /purge(/.*) {
            proxy_cache_purge cache_one $host$request_uri$is_args$args;
        }

        location / {
            proxy_pass http://127.0.0.1:8070;
            proxy_set_header Host $host:$server_port;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header REMOTE-HOST $remote_addr;
            add_header X-Cache $upstream_cache_status;
            proxy_set_header X-Host $host:$server_port;
            proxy_set_header X-Scheme $scheme;
            proxy_connect_timeout 30s;
            proxy_read_timeout 86400s;
            proxy_send_timeout 30s;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
        # HTTP反向代理相关配置结束 <<<

        access_log  /www/wwwlogs/server.log;
        error_log  /www/wwwlogs/server.error.log;
        root  /www/server/phpmyadmin;

        #error_page   404   /404.html;
        include enable-php.conf;

        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
        }

        location ~ .*\.(js|css)?$
        {
            expires      12h;
        }

        location ~ /\.
        {
            deny all;
        }

        access_log  /www/wwwlogs/access.log;
    }
    include /www/server/panel/vhost/nginx/*.conf;
}
```