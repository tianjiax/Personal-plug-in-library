(function($){
	$.fn.pagination = function(option){
		var set = $.extend({
			paginationBox	: $(this),
			count			: '',
			limit			: 10,
			curr			: 1,
			prev			: '上一页',
			next			: '下一页',
			jump			: ''
		},option)

		return this.each(
			function(){

				// set 参数
				var paginationBox 	= set.paginationBox,
					count 			= set.count,
					limit		 	= set.limit,
					curr 			= set.curr,
					prev 			= set.prev,
					next 			= set.next,
					jump			= set.jump;

				// 通过set计算参数	
				var paginalNumber	= count/limit;

				// 插入上下页
				paginationBox.append("<a href='javascript:;' class='ui-page-pre'>" + prev + "</a><span class='ui-page-box'></span><a href='javascript:;' class='ui-page-next'>" + next +  "</a>");

				// 插入页码
				for (var i = 0; i < paginalNumber; i++) {
					paginationBox.find('.ui-page-box').append('<a href="javascript:;" class="ui-page-number" data-number=' + (i+1) + '>' + (i+1) + '</a>')
				};

				// 默认第一个选中
				paginationBox.find('.ui-page-number').eq(0).addClass('ui-page-act')

			}
		)
	};
})(jQuery)