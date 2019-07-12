(function(){
    var header_nav= `
    <div class="header_fixed w_100">
    <ul class="w_1200">
        <li class="img clearfix2 ">
            <img src="../hengli/logo.png">  
        </li>
        <li class="img">
            <img src="../hengli/logo_th.png">
        </li>
        <li>
            <a href="index.html">首页</a>
        </li>
        <li>
            <a href="two.html">关于恒力</a>
            <ul class="dropdown_menu" >
                <li><a href="../html/two.html">总裁致辞</a> </li>
                <li><a href="../html/two_2.html">集团简介</a> </li>
                <li><a href="../html/two_3.html">集团荣誉</a> </li>
                <li><a href="../html/two_4.html">集团资质</a> </li>
                <li><a href="../html/two_5.html">党群工作</a> </li>
                <li><a href="../html/two_6.html">大事预览</a> </li>
                <li><a href="../html/two_7.html">恒力文化</a> </li>
            </ul>
        </li>
        <li>
            <a href="#">新闻中心</a>
            <ul class="dropdown_menu">
                <li><a href="">集团要闻</a> </li>
                <li><a href="">最新动态</a> </li>
                <li><a href="">媒体聚焦</a> </li>
                <li><a href="">行业新闻</a> </li>
                <li><a href="">专题报道</a> </li>
                <li><a href="">公告栏</a> </li>
            </ul>
        </li>
        <li>
            <a href="../html/four.html">产业与品牌</a>
            <ul class="dropdown_menu">
                <li><a href="../html/four_1.html">炼油</a> </li>
                <li><a href="">石化</a> </li>
                <li><a href="">精细化工</a> </li>
                <li><a href="">化纤</a> </li>
                <li><a href="">工程塑料</a> </li>
                <li><a href="">薄膜</a> </li>
                <li><a href="">纺织</a> </li>
                <li><a href="">贸易</a> </li>
            </ul>
        </li>
        <li>
            <a href="#">社会责任</a>
            <ul class="dropdown_menu">
                <li><a href="">慈善基金会</a> </li>
                <li><a href="">社会公益</a> </li>
                <li><a href="">环境保护</a> </li>
                <li><a href="">安全生产</a> </li>
            </ul>
        </li>
        <li>
            <a href="#">人力资源</a>
            <ul class="dropdown_menu">
                <li><a href="">人才培养</a> </li>
                <li><a href="">社会招聘</a> </li>
                <li><a href="">其他招聘</a> </li>
                <li><a href="">联系我们</a> </li>
            </ul>
        </li>
        <li>
            <input type="button"></input>
            <input type="text">
        </li>
        <li class="email">
            <div id="email_png"></div>
            <label for="email_png"><a href="email.html" target="_blank">邮箱入口</a></label>		
        </li>
        <li class="login">
            <div id="login_png"></div>
            <label for="login_png"><a href="login.html" target="_blank">OA登录</a></label>
        </li>					
    </ul>
</div> 
    `;
document.getElementById("nav_div").innerHTML=header_nav;
})();
function nav_active(li_index){
    var header_ul=document.getElementsByClassName("header_fixed")[0].children[0];//获取ul里的li
    var header_ul_lis=header_ul.children;//获取ul里的li里的ul
    header_ul_lis[li_index].setAttribute("class","nav_li_active");
}

