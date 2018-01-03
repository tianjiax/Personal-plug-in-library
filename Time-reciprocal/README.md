### 时间倒数
> 该插件基于jquery开发，主要应用于活动结束时间倒数，或是一个时间段内的时间计算，通过绑定指定元素来输出时分秒毫秒数，按需输出。该demo只做简单的数据展示，未对css样式进行优化。

##### [jquery封装插件的方法](http://blog.csdn.net/osdfhv/article/details/53185914)

##### html
```html
<div class="reciprocal">
	<span id="t_day"></span>
	<b>天</b>
	<span id="t_hour"></span>
	<b>时</b>
	<span id="t_minute"></span>
	<b>分</b>
	<span id="t_second"></span>
	<b>秒</b>
</div>
<script src="js/time-reciprocal.js"></script>
```

##### js
```js
$('.reciprocal').timeRec({
	startTime	: "",
	endTime  	: "2018/10/30 00:00:00",
	dayAttr  	: $('.t_day'),
	hourAttr  	: $('.t_hour'),
	minuteAttr  : $('.t_minute'),
	secondAttr  : $('.t_second')
})
```
##### 参数解析
参数 | 类型 |说明 | 示例值
---|---|---|---
startTime | 时间 | （非必填）开始时间，未填写的时候为今天，开启动态倒数；如若为指定时间，只计算出对应的天数，小时，分钟，秒数。| '2018/1/2 15:39:00' 或 '2018-10-30 00:00:00'
endTime   | 时间 | （必填）停止时间，startTime未填写的时候为今天，开启动态倒数；如若为指定时间，计算出对应的天数，小时，分钟，秒数 | '2018/1/2 15:39:00' 或 '2018-10-30 00:00:00'$('.t_h')
dayAttr   | Dom节点 | （可选输出）输出天数的位置，Dom节点操作沿袭jquery的Dom节点操作，默认为 id="t_day" 元素输出 |　$('#t_day') 或 $('.t_day')或 $('div')
monthAttr   | Dom节点 | （可选输出）输出小时的位置，Dom节点操作沿袭jquery的Dom节点操作，默认为 id="t_hour" 元素输出 |　$('#t_hour') 或 $('.t_hour')或 $('div')
minuteAttr   | Dom节点 | （可选输出）输出分钟的位置，Dom节点操作沿袭jquery的Dom节点操作，默认为 id="t_minute" 元素输出 |　$('#t_hour') 或 $('.t_hour')或 $('div')
secondAttr   | Dom节点 | （可选输出）输出秒数的位置，Dom节点操作沿袭jquery的Dom节点操作，默认为 id="t_second" 元素输出 |　$('#t_second') 或 $('.t_second')或 $('div')
