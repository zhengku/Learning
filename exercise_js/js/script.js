var index=0,
    timer=null,
    imageNav=byId("image").getElementsByTagName('div');
    len=imageNav.length;
    submenu=byId("menu").getElementsByTagName('div');
    slen=submenu.length;

//ID选择器
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}


function stopPlay() {
	// 停止播放	
	if(timer){
		clearInterval(timer);
	}
}

function startPlay() {
	// 计时器
	timer =setInterval(function(){
		index++;
		if(index >= len){
			index = 0;		
		}
		changeImage();
	},1000)

}


function changeImage() {
	// 图片、文字切换
	for(var i=0;i<len;i++){
		imageNav[i].style.display="none";
		submenu[i].style.backgroundColor="#fff";
		submenu[i].style.fontWeight="normal";
	}
	imageNav[index].style.display="block";
	submenu[index].style.backgroundColor="#ffcc00";
	submenu[index].style.fontWeight="bold";
}




function slideImg() {
	// 放在图片上停止播放
	var banner =byId("banner");

	banner.onmouseover= function() {
		// 触发停止事件
		stopPlay();
	}
	banner.onmouseout=function() {
		// 触发开始事件
		startPlay();
	}
	banner.onmouseout();

	//点击导航切换
	for(var i=0;i<len;i++){
		submenu[i].id = i;
		submenu[i].onclick= function() {
			// 点击切换
			index=this.id;
			changeImage();
		}
	}
}


slideImg();


