
var arr=new Array("../hengli/20190314100448119.jpg","../hengli/20190321135613339.jpg","../hengli/20190304171955245.jpg","../hengli/20190528111321175.jpg");	
	var index=0;
	function banner1(){
		if(index==3){
			index=0;
		}
	else{
			index ++;
		}
		document.getElementById("img1").src=arr[index];
	}
	setInterval(banner1,1500);
	

