(function(){
    var ul_li=`
    <div class="big_box">
    <div class="box_1200">
        <div class="e7_div">
            <ul>
                <li><a href="../html/two.html">总裁致辞</a></li>
                <li><a href="../html/two_2.html">集团简介</a></li>
                <li><a href="two_3">集团荣誉</a></li>
                <li><a href="two_4">集团资质</a></li>
                <li><a href="two_5">党群工作</a></li>
                <li><a href="two_6">大事预览</a></li>
                <li><a href="two_7">恒力文化</a></li>
            </ul>
        </div>
        <div class="right_input">
            <input type="text">
        </div>
    </div>
</div>
    `;
    document.getElementById("nav_middle").innerHTML=ul_li;
})();
function ul_li_middle(li_index){
    var ul_middle=document.getElementsByClassName("e7_div")[0].children[0]
    var ul_middle_lis=ul_middle.children;
    ul_middle_lis[li_index].setAttribute("class","e7_div ul fir");
}
