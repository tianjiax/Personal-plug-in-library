(function($){
	$.fn.timeRec = function(option){
		var set = $.extend({
			timeBox		: $(this),
			startTime	: "",
			endTime  	: "2018/10/30 00:00:00",
			dayAttr  	: $('#t_day'),
			hourAttr  	: $('#t_hour'),
			minuteAttr  : $('#t_minute'),
			secondAttr  : $('#t_second')
		},option)

		return this.each(
			function(){

				var startTime 	= set.startTime;
				var endTime 	= set.endTime;
				var dayAttr 	= set.dayAttr;
				var hourAttr 	= set.hourAttr;
				var minuteAttr 	= set.minuteAttr;
				var secondAttr 	= set.secondAttr;

			  	setInterval(function(){
					var EndTime= new Date(endTime);//结束时间
					if (startTime == '') {
						var NowTime = new Date();//开始时间
					}
					else{
						var NowTime = new Date(startTime);//开始时间
					}
				    var t =parseInt((EndTime.getTime()-NowTime.getTime())/1000);  
				    var d=0;
				    var h=0;
				    var m=0;
					var s=0;
				    if(t>=0){
				      d=parseInt(t/3600/24);  
				      h=parseInt((t/3600)%24); 
				      m=parseInt((t/60)%60);
					    s=parseInt(t%60);
				    }
					 if(d<10){
				      d="0"+d;
				    }
					 if(h<10){
				      h="0"+h;
				    }
					 if(m<10){
				      m="0"+m;
				    }
					 if(s<10){
				      s="0"+s
				    }
				    dayAttr.html(d + "");
				    hourAttr.html(h + "");
				    minuteAttr.html(m + "");
				    secondAttr.html(s + "");
				    
				},0);

			}
		)
	};
})(jQuery)