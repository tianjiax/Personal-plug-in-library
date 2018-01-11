(function($){
	$.fn.pagination = function(option){
		var set = $.extend({
			paginationBox	: $(this),
			count			: '',
			limit			: 10,
			groups			: 5,
			curr			: 1,
			prev			: '上一页',
			next			: '下一页',
			fn				: function(){}
		},option)

		return this.each(
			function(){

				// set 参数
				var paginationBox 	= set.paginationBox,
					count 			= set.count,
					limit		 	= set.limit,
					groups		 	= set.groups,
					curr 			= set.curr,
					prev 			= set.prev,
					next 			= set.next,
					fn				= set.fn;

				// 通过set计算参数	
				var paginalNumber	= Math.ceil(count/limit),
					index			= 0;

				// 插入上下页
				paginationBox.append("<a href='javascript:;' class='ui-page-pre'>" + prev + "</a><span class='ui-page-box'></span><a href='javascript:;' class='ui-page-next'>" + next +  "</a>");

				// 插入页码
				for (var i = 0; i < paginalNumber; i++) {
					paginationBox.find('.ui-page-box').append('<a href="javascript:;" class="ui-page-number" data-number=' + (i+1) + '>' + (i+1) + '</a>')
				};

				// 默认第一个选中
				paginationBox.find('.ui-page-number').eq(curr-1).addClass('ui-page-act');

				// 点击事件
				paginationBox.find('.ui-page-number').click(
					function(){
						index = $(this).index();
						pageFn(index)
					}
				)

				// 上一页
				paginationBox.find('.ui-page-pre').click(
					function(){
						index--;
						if ( index < 0) {
							index = 0
						};
						pageFn(index)
					}
				)

				// 下一页
				paginationBox.find('.ui-page-next').click(
					function(){
						index++;
						if ( index > paginalNumber-1) {
							index = paginalNumber-1;
						};
						pageFn(index)
					}
				)

				// 输出页码样式
				function pageNumbercss(index){
				  	paginationBox.find('.ui-page-box').html('');
				  	
				}

				// 执行函数
				function pageFn(index){

					paginationBox.find('.ui-page-number').eq(index).addClass('ui-page-act').siblings().removeClass('ui-page-act');
					
					curr = index +1;

					fn && fn(curr);
				}

			}
		)
	};
})(jQuery)