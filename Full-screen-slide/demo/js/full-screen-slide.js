(function ($) { 
    $.fn.setSlide = function(option){ 
        var set = $.extend({ 
            oSlide: $(this), 
            slideTime: 2000,
            autoPlay:false,
            nextEl:$('#slide-button-prev'),
            prevEl:$('#slide-button-next'),
            pagination:false
        } ,option);

        return this.each(
        	function(){
				var oSlideIndex 	=	0;
				var oSlide 			=	set.oSlide;
				var slide_out		=	set.oSlide.find('.slide-out');
				var slide_box_li 	= 	set.oSlide.find('.slide-li');
				var slidePrev 		= 	set.nextEl;
				var slideNext 		= 	set.prevEl;
				var pagination 		=   set.pagination;
				var slideBullet 	= 	set.oSlide.find('.slide-pagination-bullet');
				var slideTime 		= 	set.slideTime;
				var len 			=	slide_box_li.length;

				slidePrev.click(function(){
					oSlideIndex --;
					if(oSlideIndex<0){
						oSlideIndex=len-1;
					}
					slide(oSlideIndex)
				})

				slideNext.click(function(){
					oSlideIndex ++;
					if(oSlideIndex>len-1){
						oSlideIndex=0;
					}
					slide(oSlideIndex)
				})

				if (set.autoPlay) {
					function autoPlayFun(){
						oSlideIndex ++;
						if(oSlideIndex>len-1){
							oSlideIndex=0;
						}
						slide(oSlideIndex)
					}

					var autoPlaySet = setInterval(autoPlayFun,slideTime);

					oSlide.hover(
						function(){
							clearInterval(autoPlaySet)
						},
						function(){
							autoPlaySet = setInterval(autoPlayFun,slideTime)
						}
					)
				}

				if (pagination) {
					for (var i = 0; i < len; i++) {
						oSlide.find('.slide-pagination').append("<span class='slide-pagination-bullet'></span>")
					}
					oSlide.find('.slide-pagination .slide-pagination-bullet').eq(0).addClass('slide-pagination-bullet-active');
					var slideBullet 	= 	oSlide.find('.slide-pagination-bullet');
					slideBullet.click(function(){
						var oSlideIndex  = $(this).index();
						slide(oSlideIndex);
						return oSlideIndex
					});
				}

				function slide(oSlideIndex){
					var oSlideIndex = oSlideIndex;
					slide_out.stop().animate({'margin-left': '-'+1200*oSlideIndex},800);
					slide_box_li.eq(oSlideIndex).addClass('act').siblings().stop().removeClass('act');
					slideBullet.eq(oSlideIndex).addClass('slide-pagination-bullet-active').siblings().stop().removeClass('slide-pagination-bullet-active');
				}
			}
        )
        
    }; 
})(jQuery);

