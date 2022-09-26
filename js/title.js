//动态标题
const OriginTitle = document.title;
let titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '喂，你有在偷看罢';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '嗨嗨害，来辣';
        //变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 1000);
    }
});
