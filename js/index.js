(function(){
	nav_active(2);
})();
// function nav_active(li_index){
//     var header_ul=document.getElementsByClassName("header_fixed")[0].children[0];//获取ul里的li
//     var header_ul_lis=header_ul.children;//获取ul里的li里的ul
// //     header_ul_lis[li_index].setAttribute("class","nav_li_active");
// // }
 //引入头文件

$("#scroll_div").on("mouseenter","li",function(){
	var $li=$(this);
	var i=$li.index();
	$("#scroll_text>ul li").hide();
	$("#scroll_div>ul li").removeClass("hover_div");
	$("#scroll_div>ul li h4").removeClass("hover");
	var siblings=$li.siblings();
	siblings.each((j,elem)=>{
		if(j>=i)j++;
		$(elem).children().children("span").css("background-position",`0px -${j*90}px`);
	});
	$("."+$li.attr("data-text")).show();
	$li.addClass("hover_div");
	$li.children().children("h4").addClass("hover");
	$li.children().children("span").css("background-position",`-90px -${i*90}px`)
	var $btn_left=$("#scroll_text>div.btn_left");
	var $btn_right=$("#scroll_text>div.btn_right");
	if(i==0){
		$btn_left.addClass("btn_hover_stop_left").removeClass("btn_hover")
	}else if(i==7){
		$btn_right.addClass("btn_hover_stop_right").removeClass("btn_hover")
	}else{
		$btn_left.removeClass ("btn_hover_stop_left").addClass("btn_hover")
		$btn_right.removeClass("btn_hover_stop_right").addClass("btn_hover")
	}
});
// 左侧按钮
$("#scroll_text>div.btn_left").click(function(){
	var text=$("#scroll_text>ul>li:visible").prop("class");
	var num=text.substr(-1,1);//截取text后的数字
	if(num>1)
	{//如果大于第一个，那么就可以进行后退
		num--;
		$(`[data-text=text${num}]`).mouseenter();
	}
})
//右侧按钮
$("#scroll_text>div.btn_right").click(function(){
	var text=$("#scroll_text>ul>li:visible").prop("class");
	var num=text.substr(-1,1);
	console.log(num)
	if(num<8)
	{//如果小于第八个，那么就进行前进
		num++;
		$(`[data-text=text${num}]`).mouseenter();
	}
})

