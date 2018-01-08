(function($){
	$.fn.locSelect = function(option){
		var set = $.extend({
			locTab : '',
			locCon : '',
			actClassName:'act'
		},option)

		return this.each(
			function(){
				var locTab 			= set.locTab,
					locCon 			= set.locCon,
					actClassName 	= set.actClassName,
					locArr 			= [];

				// 存储模块距离顶部高度 
				for (var i = 0; i < locCon.length; i++) {
					locCon.eq(i).offset().top;
					locArr[i] = locCon.eq(i).offset().top;
				};

				//让导航栏根据现在位置选中
				windowSt();
				
				// 监控滚动			
				$(window).scroll(function () {
					windowSt()
				});

				// 滚动加载事件
				function windowSt(){
					for (var index = 0; index < locTab.length; index++) {
						// + 20为了让其到达附近位置就切换，加强用户体验感
						if($(window).scrollTop() + 20 > locArr[index]  ){
							// 拿到相关索引，tab执行事件
							changeClass(index)
						}
					};
				}

				// 点击tab到达指定模块
				locTab.click(
					function(event) {
						var index = $(this).index();
						$('body,html').stop().animate({scrollTop:locCon.eq(index).offset().top},500,function(){
							changeClass(index)
						}); 
					}
				);

				// tab选中
				function changeClass(index){
					locTab.eq(index).addClass(actClassName).siblings().removeClass(actClassName)
				}
				
			}
		);
	};
})(jQuery)


