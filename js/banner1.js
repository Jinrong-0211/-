$("#banner>ul.hd").on("mouseenter", "li", function () {
    clearInterval(timer);
    timer = null;
    $li = $(this);
    var time = $li.html() - 1;
    times = time;
    $("#banner>ul.bd").css("top", time * (-850));
    $li.addClass("on").siblings("li").removeClass("on");
})
//鼠标移出方块启动定时器
$("#banner>ul.hd").mouseleave(() => {
    if (timer == null) {
        times++;
        moveTo();
    }
})
// 图片滚动函数
var times = 1;
var timer = null;
$(function () {
    moveTo();
})
//定时器
function moveTo() {
    timer = setInterval(() => {
        if (times == 1) {
            $("#banner>ul.bd").addClass("transition");
        }
        $("#banner>ul.bd").css("top", times * (-850));
        ++times;
        if (times == 5) {
            times = 1;
            setTimeout(() => {
                $("#banner>ul.bd").removeClass("transition");
                $("#banner>ul.b1`d").css("top", 0);
            }, 600);
        }
        $($("#banner>ul.hd>li")[times - 1]).addClass("on").siblings("li").removeClass("on");
    }, 3000)
}