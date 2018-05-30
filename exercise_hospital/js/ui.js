// ui-search 定义
$.fn.Uisearch=function(){
	var ui = $(this);

	$('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-list').show();
		return false;
	});

	$('.ui-search-list a',ui).on('click',function(){
		$('.ui-search-selected').text($(this).text());
		$('.ui-search-list').hide();
		return false;
	});

	$('body').on('click',function(){
		$('.ui-search-list').hide();
	});
}

// ui-tab 定义
$.fn.UiTab = function(header,content){
	var ui = $(this);

	var tabs = $(header,ui);
	var cons = $(content,ui);

	tabs.on('click',function(){
		var index = $(this).index();

		tabs.removeClass('nav-select').eq(index).addClass('nav-select');
		cons.hide().eq(index).show();

		return false;
	});
}


// //ui-time
// $.fn.UiTime = function(week,date){
// 	var ui=$(this);


// 	var week=$('.week');
// 	var weekarr=new Array();

// }

// //ui-banner
// $.fn.UiBanner = function(){
// 	var ui = $(this);

// 	var wrap=$('ui-time-wrap');
// 	var btn_prev=$('.prev');
// 	var btn_next=$('.next');

// 	var items  = $('.items',ui);

// 	var current = 0;
// 	var size = items.size();
// 	var width = items.eq(0).width();

// 	wrap
// 	.on('move_prev',function(){
// 		if(current<=0){
// 			current = size;
// 		}
// 		current = current - 1 ;
// 		wrap.triggerHandler('move_to',current);
// 	})
// 	.on('move_next',function(){
// 		if( current >= size-1){
// 			current = -1;
// 		}
// 		current = current + 1 ;
// 		wrap.triggerHandler('move_to',current);
// 	})
// 	.on('move_to',function(evt,index){
// 		wrap.css('left',index*width*-1);
// 		tips.removeClass('item_focus').eq(index).addClass('item_focus');
// 	})
// 	.on('auto_move',function(){

// 		setInterval(function(){
// 			enableAuto && wrap.triggerHandler('move_next');
// 		},2000);

// 	})
// 	.triggerHandler('auto_move');

// 	btn_prev.on('click',function(){
// 		wrap.triggerHandler('move_prev');
// 	});
// 	btn_next.on('click',function(){
// 		wrap.triggerHandler('move_next');
// 	});
// }


// 页面脚本的逻辑
$(function(){
	$('.ui-search').Uisearch();

	$('.content').UiTab('.content-menu > .menu-nav','.content-sent > .content-first');

	// $('ui-time').UiTime('.week','date');

	// $('ui-banner').UiBanner();
});

