(function($){
	$.fn.countDown = function(option){
		var set = $.extend({
			countBtn	: 	$(this),
			time 		:   60,
			unit		:   's'
		},option)

		return this.each(
			function(){
				var countBtn = set.countBtn;
				var time 	 = set.time;
				var unit	 = set.unit;

				var timeout;
				var count =time; 
				var countdown_text = countBtn.html();

				var BtnCount = function() {
				    // 启动按钮
				    if (count == 0) {
				        countBtn.attr("disabled", false);
				        countBtn.text(countdown_text);
				        clearTimeout(timeout);           // 可取消由 setTimeout() 方法设置的 timeout
				        return count = time; 
				    }
				    else {
				        countBtn.attr("disabled", true);
				        count--;
				        countBtn.text(count.toString() + unit);
				        setTimeout(BtnCount, 1000);
				    }

				};

				countBtn.click(	
					function(){
						countBtn.attr("disabled", true);
						countBtn.text(count.toString() + unit);
						timeout = setTimeout(BtnCount, 1000); // 1s执行一次BtnCount
					}
				)
			}

		)
	};
})(jQuery)

