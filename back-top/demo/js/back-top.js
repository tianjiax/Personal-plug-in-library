(function($){
	$.fn.backTop = function(option){
		var set = $.extend({
			popbtn	 	: 	$(this),
			time 		:   'normal'
		},option)

		return this.each(
			function(){

				var oBtn 	= set.popbtn;
				var time	= set.time;

				oBtn.click(function(){

					$('body,html').animate({scrollTop:0},time);

				})
				
			}
		)
	};
})(jQuery)