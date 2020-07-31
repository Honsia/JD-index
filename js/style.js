window.onload=function(){	
	//顶部的图像隐藏
	var close = document.getElementById("close");
	var header = document.getElementById("header");
	close.onclick=function(){	
		header.style.display="none";
	}
	//选项卡的隐藏和获取
	var lilist=document.getElementById("list").getElementsByTagName("li");
	var divlist=document.getElementById("list").getElementsByClassName("div2");
	for(var i=0;i<lilist.length;i++){
		lilist[i].index=i;
		lilist[i].onmouseover=function(){			
			divlist[this.index].style.display="block";
		}
		lilist[i].onmouseout=function(){
			divlist[this.index].style.display="none";
		}
	}
	//轮播
var ad=document.getElementById("ad");
var left=document.getElementById("left");
var right=document.getElementById("right");
var numlist=document.getElementById("number").getElementsByTagName("li");
var links=document.getElementById("links");
var image=document.getElementById("image");
var www=["http://www.baidu.com/","http://www.jd.com/","https://www.taobao.com/","http://www.bilibili.com/","http://www.acfun.tv/","http://www.dm530.com/"];
var len=numlist.length;
//初始化
var add=1;
numlist[0].style.background="#b61b1f";
image.src="./image/ad01.jpg";
links.href=www[0];
ad.onmouseover=function(){
	left.style.display="block";
	right.style.display="block";
	clearInterval(lun);
}
ad.onmouseout=function(){
	left.style.display="none";
	right.style.display="none";
	lunbo();
}
left.onclick=function(){
	add=add-1;
	if(add<1){
		add=6;
	}
	image.src="./image/ad0"+add+".jpg";
	links.href=www[add-1];
	var x=add-1;
	for(var i=0;i<len;i++){
		numlist[i].style.background="#3e3e3e";
		if(x==i){
			numlist[i].style.background="#b61b1f";
		}
	}
}
right.onclick=function(){
	add=add+1;
	if(add>6){
		add=1;
	}
	image.src="./image/ad0"+add+".jpg";
	links.href=www[add-1];
	var x=add-1;
	for(var i=0;i<len;i++){
		numlist[i].style.background="#3e3e3e";
		if(x==i){
			numlist[i].style.background="#b61b1f";
		}
	}
}
//鼠标滑过数字切换图片
for(var i=0;i<len;i++){
	numlist[i].onmouseover=function(){
		add=this.innerHTML;
		image.src="./image/ad0"+add+".jpg";
		links.href=www[add-1];
		var x=add-1;
		for(var i=0;i<len;i++){
			numlist[i].style.background="#3e3e3e";
			if(x==i){
				numlist[i].style.background="#b61b1f";
			}
		}
	}
}
function lunbo(){
	lun=setInterval(function(){
		add=add+1;
		if(add>6){
			add=1;
		}	
		image.src="./image/ad0"+add+".jpg";	
		links.href=www[add-1];
		var x=add-1;
		for(var i=0;i<len;i++){
			numlist[i].style.background="#3e3e3e";
			if(x==i){
				numlist[i].style.background="#b61b1f";
			}
		}
	},2000)
}
//执行轮播函数
lunbo();
}