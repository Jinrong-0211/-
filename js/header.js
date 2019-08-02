var isload = false;
(function () {
    $.ajax(
        {
            url: "../html/header.html",
            type: "get",
            success: function (result) {

                $("#nav_div").html(result);
                $(`<link rel="stylesheet" href="../css/header.css">`).appendTo("head");
                isload = true;
            }
        }
    )
})();

function nav_active(li_index) {
    var timer = setInterval(() => {
        if (isload) {
            var header_ul_lis = $("#header_ul>li");
            $(header_ul_lis[li_index]).addClass("nav_li_active");
            clearInterval(timer);
            isload = false;
        }
    }, 100)
}
