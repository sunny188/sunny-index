$(function(){
	
	//作品展示hover淡入淡出
	$('.myworke ul li').hover(function(){
		$(this).siblings().stop().fadeTo(500,0.8);
	},function(){
		$(this).siblings().stop().fadeTo(500,1)
	})
	//tab菜单分类
	$('.tex p').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.worke div').eq($(this).index()).addClass('all').siblings().removeClass('all')
	})
	
	//作品模态窗口
//	$('.worke li').click(function(){
//		//获取li的索引
//		var bigImg=$(this).children('img').attr('mybigImg');
//		$('.modalBox .showImg img').attr('src',bigImg);
//		$('.modalBox').stop().fadeIn();
//		$('.fixeBody').addClass('fixContent');
//	});
//	
//	$('.modalBox .bgBox span').click(function(){
//		$('.modalBox').stop().fadeOut();
//		$('.fixeBody').removeClass('fixContent');
//	});
	
		$('.bigpic li').click(function(){
		$(this).addClass('mybigMig').siblings().removeClass('mybigMig');
	});


		
	
	

	
	
})


	



