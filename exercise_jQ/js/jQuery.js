$(function () {
	//定义需要的变量
	var index=0;   //索引
	var pics=$('.picture');
	var len=pics.length;
	var next=$('#right');
	var last=$('#left');

	//点击事件
	next.click(function(){
		index++;
		if(index > len-1){
			index = 0;
		}
		changeImage();
	});

	last.click(function(){
		index--;
		if (index < 0) {
			index = len-1;
		}
		changeImage();
	});

	//圆点事件
	$('span').each(function(now){
		$(this).click(function(){
			index = now;
			changeImage(index);
		});
	});

	//图片自动播放
	var times =setInterval(function() {
		next.click();
	}, 2000);

	// 鼠标事件
	$('.banner').mouseenter(function(){
		clearInterval(times);
	});
	$('.banner').mouseleave(function(){
		times =setInterval(function() {
		next.click();
	}, 2000);
	});

	//切换图片
	function changeImage() {
		$('.picture').removeClass('hide');
		$('span').removeClass('select');
		$('.picture').eq(index).addClass('hide');
		$('span').eq(index).addClass('select');
	}


	
});