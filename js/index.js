function qh(obj){
	//获取滚动图div
	var arr=document.getElementsByClassName("scroll")[0];
	//获取文本的div
    var arr_text=document.getElementsByClassName("scroll_text")[0];
	//获取滚动图的每一个li
	var arr_ulli=arr.getElementsByTagName("li");
	//获取文本的每一个li
	var arr_text_li=arr_text.getElementsByTagName("li");
	//判断li数组是否为空
	if (arr_ulli.length>0&&arr_text_li.length>0)
	{
		for (var i=0;i<arr_ulli.length ;i++ )
		{	
			//默认为隐藏
			arr_text_li[i].style.display="none";
			//获取背景图
			var arr_span=arr_ulli[i].getElementsByTagName("span")[0];
			arr_span.setAttribute("style","background-position:0px -"+i*90+"px;");
			
			var arr_h4=arr_ulli[i].getElementsByTagName("h4")[0];
			arr_h4.className="";
			arr_ulli[i].className="fl";
			//判断是否为鼠标悬停的li
			if (arr_ulli[i]==obj)
			{		
				//如果是，背景变绿
				arr_span.setAttribute("style","background-position:-90px -"+i*90+"px;");
				//如果是，显示文本div
				arr_text_li[i].style.display="block";				
				arr_ulli[i].className="fl hover_div";
				arr_h4.className="hover";
			}
		}
	}
}
		(function(){
			nav_active(2);
		})();
