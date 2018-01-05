(function ($) { 
    $.fn.setSlide = function(option){ 
        var set = $.extend({ 
            Slide: $(this), 
            switchingSpeed:500,
            isFull:true,
            slideTime: 2000,
            autoPlay:false,
            prevEl:$('#slide-button-prev'),
            nextEl:$('#slide-button-next'),
            pagination:false,
            pagingTrigger:'click',
            slideLiw:1200,
            slideLih:600,
            fn:function(){

            }
        } ,option);

        return this.each(
        	function(){
        		// 参数赋值
				var SlideIndex 	=	0,
					Slide 			=	set.Slide,
					switchingSpeed 	=	set.switchingSpeed,
					isFull 			=	set.isFull,
					slideLiw		= 	set.slideLiw,
					slideLih		= 	set.slideLih,
					slidePrev 		= 	set.prevEl,
					slideNext 		= 	set.nextEl,
					pagination 		=   set.pagination,
					pagingTrigger	=	set.pagingTrigger,
					fn 				=	set.fn,
					slideOut		=	Slide.find('.slide-out'),
					slideLi 		= 	Slide.find('.slide-li'),
					slideBullet 	= 	Slide.find('.slide-pagination-bullet'),
					slideTime 		= 	set.slideTime,
					slideLen 		=	slideLi.length;

				// 轮播图中间主体宽高
				Slide.css({'width':slideLiw,'height':slideLih});
				slideLi.css({'width':slideLiw,'height':slideLih});

				// 轮播图外层宽高
				slideOut.css({'width':slideLiw*slideLen,'height':slideLih});

				// 默认第一个选中
				slideLi.eq(0).addClass('slide-li-act');

				// 是否全屏
				if (!isFull) {
					Slide.css({'overflow':'hidden'});
					slideOut.addClass('isfull')
				}

				// 上一页
				slidePrev.click(function(){
					SlideIndex --;
					if(SlideIndex<0){
						SlideIndex=slideLen-1;
					}
					slide(SlideIndex)
				})

				// 下一页
				slideNext.click(function(){
					SlideIndex ++;
					if(SlideIndex>slideLen-1){
						SlideIndex=0;
					}
					slide(SlideIndex)
				})

				// 添加分页导航
				if (pagination) {
					Slide.append("<div class='slide-pagination'></div>");
					for (var i = 0; i < slideLen; i++) {
						Slide.find('.slide-pagination').append("<span class='slide-pagination-bullet'></span>")
					}
					Slide.find('.slide-pagination .slide-pagination-bullet').eq(0).addClass('slide-pagination-bullet-active');
					var slideBullet 	= 	Slide.find('.slide-pagination-bullet');
				}

				// 分页导航
				if (pagingTrigger == 'hover') {
					var pagingTrigger = "mouseover";
				}
				slideBullet.on(pagingTrigger,function(){
					SlideIndex  = $(this).index();
					slide(SlideIndex);
				})

				// 自动播放
				if (set.autoPlay) {
					function autoPlayFun(){
						SlideIndex ++;
						if(SlideIndex>slideLen-1){
							SlideIndex=0;
						}
						slide(SlideIndex)
					}

					var autoPlaySet = setInterval(autoPlayFun,slideTime);

					Slide.hover(
						function(){
							clearInterval(autoPlaySet)
						},
						function(){
							autoPlaySet = setInterval(autoPlayFun,slideTime)
						}
					)
				}

				// 动画执行事件
				function slide(SlideIndex){
					slideOut.stop().animate({'margin-left': '-'+slideLiw*SlideIndex},switchingSpeed);
					slideLi.eq(SlideIndex).addClass('slide-li-act').siblings().stop().removeClass('slide-li-act');
					slideBullet.eq(SlideIndex).addClass('slide-pagination-bullet-active').siblings().stop().removeClass('slide-pagination-bullet-active');
					fn && fn(SlideIndex);
					return SlideIndex;
				}
			}
        )
        
    }; 
})(jQuery);

