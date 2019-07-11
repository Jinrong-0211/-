(function(){
    var ul_li=`
    <div class="big_box w_100">
    <div class="w_1200 clearfix2">
        <div class="e7_div fl">
            <ul>
                <li class="fl"><a href="../html/two.html">总裁致辞</a></li>
                <li class="fl"><a href="../html/two_2.html">集团简介</a></li>
                <li class="fl"><a href="../html/two_3.html">集团荣誉</a></li>
                <li class="fl"><a href="../html/two_4.html">集团资质</a></li>
                <li class="fl"><a href="../html/two_5.html">党群工作</a></li>
                <li class="fl"><a href="../html/two_6.html">大事预览</a></li>
                <li class="fl"><a href="../html/two_7.html">恒力文化</a></li>
            </ul>
        </div>
        <div class="right_input fr">
            <input type="text" >
            <input type="button" class="seach">
        </div>
    </div>
</div>
    `;
    document.getElementById("nav_middle").innerHTML=ul_li;
})();
function ul_li_middle(li_index){
    var ul_middle=document.getElementsByClassName("e7_div")[0].children[0]
    var ul_middle_lis=ul_middle.children;
    ul_middle_lis[li_index].setAttribute("class","e7_div ul fir fl");
}
