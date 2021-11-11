while true
do
    git pull
    # npm i
    npm run build

    mv dist dist_old
    mv  docs/.vuepress/dist dist

    rm -rf ./dist_old

    echo "完成更新:" `date +%H:%M:%S` >> log.txt

    # sleepTime=`expr 60 \* 60 \* 24`
    sleepTime=`expr 60 \* 1`
    sleep ${sleepTime}
done