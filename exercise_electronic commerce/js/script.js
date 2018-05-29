// 定义轮播图所需变量
var index=0,
	pics=$('.banner-slide'),
	len=pics.length,
	next=$('#bannerRight'),
	last=$('#bannerLeft');


$(function(){

	// 登录窗体弹出
	$('#loginHtml').click(function(){
		showLogin();
	});

	// 注册窗体弹出
	$('#layer-register').click(function(){
		showRegister();
	})

	// 关闭登录、注册窗体
	$('#layer-close').click(function(){
		closeLogin();
	});
	$('#reg-close').click(function(){
		closeRegister();
	});

	// 调用判断输入内容是否正确函数
	$('#userNumber').blur(judgeUserNumber);
	$('#passwordNumber').blur(judgePassword);
	$('#reguserNumber').blur(regjudgeUserNumber);
	$('#regpasswordNumber').blur(regjudgePassword);

	// 顶部部分区域显示
	$('#topFirst').mouseover(showTopNav);

	$('#topSecond').mouseover(showTopNav);

	$('#topThird').mouseover(showTopNav);

	$('#topFourth').mouseover(showTopNav);


	// 顶部区域部分隐藏
	$('#top-nav-first').mouseleave(closeTopNav);
	$('#topFirst').mouseleave(closeTopNav);

	$('#top-nav-second').mouseleave(closeTopNav);
	$('#topSecond').mouseleave(closeTopNav);

	$('#top-nav-third').mouseleave(closeTopNav);
	$('#topThird').mouseleave(closeTopNav);

	$('#top-nav-fourth').mouseleave(closeTopNav);
	$('#topFourth').mouseleave(closeTopNav);

	// 鼠标放在购物车上显示内容
	$('#shoppingCar').mouseover(showShoppingCar);

	// 鼠标离开购物车隐藏内容
	$('#shoppingCar').mouseleave(closeShoppingCar);

	// banner事件
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
	$('.dots').children('span').each(function(now){
		$(this).click(function(){
			index = now;
			changeImage(index);
		});
	});

	//图片自动播放
	var times =setInterval(function() {
		next.click();
	}, 1000);

	// 鼠标事件
	$('.banner-content').mouseenter(function(){
		clearInterval(times);
	});
	$('.banner-content').mouseleave(function(){
		times =setInterval(function() {
		next.click();
	}, 1000);
	});

	// 显示右侧信息
	$('.tipContent').mouseover(showTips);
	$('.tipContent').mouseleave(hideTips);


	// 监听滚动条
	$(window).scroll(function(){
        //获取当前滚动条高度
		var topp = $(document).scrollTop();
		// 显示楼层
		if(topp >650){
			showLeft();
			$('.leftNum').children('a').removeClass('leftSelect');
			$('#classone').children('a').addClass('leftSelect');
		}
		if(topp>1250){
			$('.leftNum').children('a').removeClass('leftSelect');
			$('#classtwo').children('a').addClass('leftSelect');
		}
		if(topp >1750){
			showLeft();
			$('.leftNum').children('a').removeClass('leftSelect');
			$('#classthree').children('a').addClass('leftSelect');
		}
		if(topp>2350){
			$('.leftNum').children('a').removeClass('leftSelect');
			$('#classfour').children('a').addClass('leftSelect');
		}
		if(topp >2650){
			showLeft();
			$('.leftNum').children('a').removeClass('leftSelect');
			$('#classfive').children('a').addClass('leftSelect');
		}
	});

});


// 判断输入内容是否正确
function judgeUserNumber(){
	var usernumber=$('#userNumber').val();
	var usernamelen=usernumber.length;
	if(usernamelen != 11){
		$('#errorwordone').html('请输入正确的登录邮箱或手机号');
	}
};
function judgePassword(){
	var passwordnumber=$('#passwordNumber').val();
	var passwordlen=passwordnumber.length;
	if(passwordlen > 16 || passwordlen < 6){
		$('#errorwordtwo').html('请输入正确6-16位密码，区分大小写，不能用空格');
	}
};
function regjudgeUserNumber(){
	var regusernumber=$('#reguserNumber').val();
	var regusernamelen=regusernumber.length;
	if(regusernamelen != 11){
		$('#errorwordthree').html('请输入正确的登录邮箱或手机号');
	}
};
function regjudgePassword(){
	var regpasswordnumber=$('#regpasswordNumber').val();
	var regpasswordlen=regpasswordnumber.length;
	if(regpasswordlen > 16 || regpasswordlen < 6){
		$('#errorwordfour').html('请输入正确6-16位密码，区分大小写，不能用空格');
	}
};

// 清楚错误信息
function clearError(){
	$('.errorword').html('');
}

// 显示登录窗体
function showLogin(){
	// 显示登录窗体
	$('#layer-mask').show();
	// 显示遮罩层
	$('#layer-pop').show();
};

// 关闭登录窗体
function closeLogin(){
	// 关闭登录窗体
	$('#layer-mask').hide();
	// 关闭遮罩层
	$('#layer-pop').hide();
	// 调用清楚函数
	clearError();
}

// 显示注册窗体
function showRegister(){
	// 调用关闭登录窗体函数
	closeLogin();
	//显示注册窗体
	$('#reg-pop').show();
	// 显示遮罩层
	$('#layer-mask').show();
}

// 关闭注册窗体
function closeRegister(){
	// 关闭登录窗体
	$('#layer-mask').hide();
	// 关闭遮罩层
	$('#reg-pop').hide();
	// 调用清楚函数
	clearError();
}

// 顶部显示窗体函数
function showTopNav(){
	// 定义当前元素下的子元素
	var childNav=$(this).children('.top-nav');
	// 显示窗体
	childNav.show();
}

// 顶部隐藏窗体函数
function closeTopNav(){
	// 定义当前元素下的子元素
	var childNav=$(this).children('.top-nav');
	// 关闭当前显示区域
	childNav.hide();
}

// 购物车显示函数
function showShoppingCar(){
	// 显示购物车内容
	$('#shoppingContent').show();
	// 更换按钮图片
	$('#leftImg').attr('src','img/icon/25.png');
	$('#rightImg').attr('src','img/icon/24.png');
}

function closeShoppingCar(){
	// 隐藏购物车内容
	$('#shoppingContent').hide();
	// 图片还原
	$('#leftImg').attr('src','img/icon/26.png');
	$('#rightImg').attr('src','img/icon/23.png');
}

//切换图片
	function changeImage() {
		$('.banner-slide').removeClass('show');
		$('.dots').children('span').removeClass('select');
		$('.banner-slide').eq(index).addClass('show');
		$('.dots').children('span').eq(index).addClass('select');
	}

	// 显示右侧消息
	function showTips(){
		$(this).children('.tipsCh').show();
	}

	// 关闭右侧信息
	function hideTips(){
		$(this).children('.tipsCh').hide();
	}


// 显示左侧楼层
	function showLeft(){
		// 显示楼层
		$('#leftNav').show();
	}