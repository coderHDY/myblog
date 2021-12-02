update() {
    git pull
    #npm i
    npm run build

    mv dist dist_old
    mv  docs/.vuepress/dist dist

    rm -rf ./dist_old

    echo "完成更新:" `date +"%Y-%m-%d %H:%M:%S"` >> log.txt
}

update

while true
do
    current=`date +%H`
    if test ${current} -eq '03';then
        update
    fi

    sleepTime=`expr 60 \* 60 \* 58`
    sleep ${sleepTime}
done