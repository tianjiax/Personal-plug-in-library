## 全屏轮播图
> 该插件基于jquery开发，现阶段很多PC网站都需要用到轮播图切换的效果，很多时候要在页面中复用轮播图，而且对于PC用户而言，IE8+用户居多，我们需要做一个兼容该用户群体的全屏轮播图，同时我们也可以通过参数设置来把该幻灯片设置为非全屏复用多个位置。这时候该插件便应运而生。我们可以通过简单的调用及样式来对其进行调用，从而完成快速开发的过程。该模块并非只能是轮播图，轮播图条目区域可以放上文字列表、图片等任意内容，这块在于你自己选择。接下来我们对该插件进行一个解析：

##### [jquery封装插件的方法](http://blog.csdn.net/osdfhv/article/details/53185914)

### demo预览
![image](http://ww1.sinaimg.cn/large/0060lm7Tly1fn4lgv6n98j31gu0fc4k8.jpg)

### 方法调用
> 现在对方法调用进行一个简单的解析，后面再就函数进行具体的解析。

##### html
```html
<!-- 重置样式表 -->
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/4.1.1/normalize.css">
<!-- 引入slide插件样式表 -->
<link rel="stylesheet" href="css/full-screen-slide.min.css">
<!-- html模块 -->
<div class="slide-box slide-box-ex">
	<!-- 轮播图主体模块 -->
	<div class="slide-con">
		<div class="slide-out">
			<div class="slide-li"><img src="images/slide/1.png" style="width: 100%" alt=""></div>
			<div class="slide-li"><img src="images/slide/2.png" style="width: 100%" alt=""></div>
			<div class="slide-li">
				<div class="slide-li-content">
					<div class="box" style="background: #ddd;color: #333;height: 600px">这里是文本存放位置</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 自定义上一页下一页 -->
	<div class="slide-page">
		<div class="slide-button-prev"><i></i></div>
		<div class="slide-button-next"><i></i></div>
	</div>
</div>
<!-- 引入slide插件js文件 -->
<script src="js/full-screen-slide.min.js"></script>
```

##### js
```js
// 参数调用
$('.slide-box-ex').setSlide({
	isFull:false,
	switchingSpeed:400,
	slideTime: 3000,
	autoPlay:true,
	prevEl:$('.slide-box-ex').find('.slide-button-prev'),
	nextEl:$('.slide-box-ex').find('.slide-button-next'),
	pagination:true,
	pagingTrigger:'hover',
	slideLiw:1100,
	slideLih:540,
	fn:function(index) {
		console.log(index)
	}
});
```
### 参数解析
参数 | 类型 |说明 | 示例值
---|---|---|---
isFull 			| boolean 	| （非必填）定义幻灯片是否为全屏展示该幻灯片。默认为true | false
switchingSpeed 	| number 	| （非必填）定义轮播图切换速度的毫秒数。如若为空，默认自动播放时间为500毫秒	| 600
slideTime 		| number 	| （非必填）定义轮播图自动播放的毫秒数，只有开启autoPlay属性时有效。如若为空，默认自动播放时间为2000毫秒 | 3000
autoPlay 		| boolean 	| （非必填）是否自动切换，默认为false | true
prevEl 			| DOM 		| （非必填）点击轮播图切换到上一张，可自定义标签，Dom节点操作沿袭jquery的Dom节点操作，默认为$('#slide-button-prev')。如果第一张操作时候便跳到最后一张。 | $('.slide-button-prev')
nextEl 			| DOM 		| （非必填）点击轮播图切换到下一张，可自定义标签，Dom节点操作沿袭jquery的Dom节点操作，默认为$('#slide-button-next')。如果最后一张操作时候便跳到第一张。 | $('.slide-button-prev')
pagination 		| boolean 	| （非必填）是否使用分页导航，只有开启autoPlay属性时有效。默认为false | true
pagingTrigger	| string 	| （非必填）分页导航指示器的触发事件，默认为click | 'hover'
slideLiw 		| number 	| （非必填）设定轮播容器宽度，默认单位为px，无需加单位。默认为1200 | 1000
slideLih 		| number 	| （非必填）设定轮播容器高度，默认单位为px，无需加单位。默认为600 | 500
fn				| Object	| （非必填） 回调函数，我们可以在当轮播图切换时，拿到当前轮播图的索引值并在该时刻进行回调的操作。与一般函数写法相同，索引值可传可不传。| function(index) {} 或 function() {} 

### 结语
> 在前端项目中，我们需要用到轮播图的地方很多，因为每次都是重复性的编写导致个人时间浪费，现阶段我们将其封装为一个插件，只要按照一定规则便可快速开发该模块。本人才疏学浅，简单对日常使用的幻灯片操作进行了一个封装，如若有好的想法欢迎提出来，共勉。 -- 钿佳

