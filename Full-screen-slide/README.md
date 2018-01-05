全屏轮播图
==========

> 该插件基于jquery开发，现阶段很多PC网站都需要用到轮播图切换的效果，很多时候要在页面中复用轮播图，而且对于PC用户而言，IE8+用户居多，需要做一个兼容该用户群体的全屏轮播图，同时也可以通过参数设置来把该幻灯片设置为非全屏复用多个位置。这时候该插件便应运而生。可以通过简单的调用及样式来对其进行调用，从而完成快速开发的过程。该模块并非只能是轮播图，轮播图条目区域可以放上文字列表、图片等任意内容，这块在于你自己选择。接下来对该插件进行一个解析：

### [jquery封装插件的方法](http://blog.csdn.net/osdfhv/article/details/53185914)

# demo简单预览
![image](https://s1.ax1x.com/2018/01/05/pkOdQe.png)

# 方法调用
> 现在对方法调用进行一个简单的解析，后面再就函数进行具体的解析。

### html
```html
<!-- 重置样式表 -->
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/4.1.1/normalize.css">
<!-- 引入slide插件样式表 -->
<link rel="stylesheet" href="../dist/css/full-screen-slide.css">
<!-- 调用demo -->
<div class="slide-box-demo">
	<div class="slide-box">
		<!-- 轮播图主体模块 -->
		<div class="slide-con">
			<div class="slide-out">
				<div class="slide-li">
					<div class="slide-li-content">
						<div class="box" style="background: #ddd;color: #333;height: 600px">这里是文本存放位置</div>
					</div>
				</div>
				<div class="slide-li"><img src="../dist/images/slide/1.png" style="width: 100%" alt=""></div>
				<div class="slide-li">
					<div class="slide-li-content">
						<div class="box" style="background: #ccc;color: #333;height: 600px">这里是文本存放位置</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 默认上一页下一页 -->
		<div class="slide-page">
			<div class="slide-button-prev" id="slide-button-prev"><i></i></div>
			<div class="slide-button-next" id="slide-button-next"><i></i></div>
		</div>
	</div>	
</div>
<!-- 引入jquery -->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<!-- 引入slide插件js文件 -->
<script src="../dist/js/full-screen-slide.js"></script>
```

### js
```js
// 默认
$('.slide-box-demo').setSlide()
```
# 参数解析
参数 | 类型 |说明 | 示例值
---|---|---|---
$(this)			| DOM 		|  当前轮播图（$('.slide-box')）外层的包裹的DOM节点，可自定义标签，Dom节点操作沿袭jquery的Dom节点操作。详见demo | <span style="color: red">$("#demo")</span>.setSlide() 
isBlock 		| boolean 	| （非必填）定义幻灯片是否为块状展示该幻灯片。默认为false | true
fullScreenw 	| boolean 	| （非必填）宽度完全全屏，轮播图宽度为整个屏幕宽度。注意：当设置该参数为true时，slideLiw参数无效。默认为false | true
fullScreenh 	| boolean 	| （非必填）高度完全全屏，轮播图高度为整个屏幕高度。注意：当设置该参数为true时，slideLih参数无效。默认为false | true
switchingSpeed 	| number 	| （非必填）定义轮播图切换速度的毫秒数。如若为空，默认自动播放时间为600毫秒	| 800
slideTime 		| number 	| （非必填）定义轮播图自动播放的毫秒数，只有开启autoPlay属性时有效。如若为空，默认自动播放时间为3000毫秒 | 2000
autoPlay 		| boolean 	| （非必填）是否自动切换，默认为false | true
prevEl 			| DOM 		| （非必填）点击轮播图切换到上一张，可自定义标签，Dom节点操作沿袭jquery的Dom节点操作，默认为$('#slide-button-prev')。注意：如若使用默认标签，id只能单次调用。如果第一张操作时候便跳到最后一张。默认上一页样式：<div class=\"slide-page\"><div class=\"slide-button-prev\">\<i>\</i><\/div><\/div> | $('.slide-button-prev')
nextEl 			| DOM 		| （非必填）点击轮播图切换到下一张，可自定义标签，Dom节点操作沿袭jquery的Dom节点操作，默认为$('#slide-button-next')。注意：如若使用默认标签，id只能单次调用。如果最后一张操作时候便跳到第一张。默认下一页样式：<div class=\"slide-page\"><div class=\"slide-button-next\">\<i>\</i><\/div><\/div> | $('.slide-button-prev')
pagination 		| boolean 	| （非必填）是否使用分页导航，只有开启autoPlay属性时有效。默认为false | true
pagingTrigger	| string 	| （非必填）分页导航指示器的触发事件，默认为click | 'hover'
slideLiw 		| number 	| （非必填）设定轮播容器宽度，默认单位为px，无需加单位。默认为1200 | 1000
slideLih 		| number 	| （非必填）设定轮播容器高度，默认单位为px，无需加单位。默认为600 | 500
fn				| Object	| （非必填） 回调函数，可以在当轮播图切换时，拿到当前轮播图的索引值并在该时刻进行回调的操作。与一般函数写法相同，索引值可传可不传。| function(index) {} 或 function() {} 

# demo演示
> 对于上面所做的解析，如果还有不明白的话，不用担心，就上面的参数提供了demo进行解析，让你快速开发你想要的轮播图。下面为相关demo的地址：

demo名字 | 链接
---|---
默认调用 | [01-default](./demos/01-default.html)
上下页切换调用 | [02-navigation.html](./demos/02-navigation.html)
分页调用 | [03-pagination.html](./demos/03-pagination.html)
自动播放 | [04-autoplay.html](./demos/04-autoplay.html)
自定义宽高 | [05-widthAndheightSetting.html](./demos/05-widthAndheightSetting.html)
块状展示 | [06-block-display.html](./demos/06-block-display.html)
宽高完全全屏 | [07-fullscreen.html](./demos/07-fullscreen.html)
回调函数 | [08-callback.html](./demos/08-callback.html)

# 结语
> 在前端项目中，需要用到轮播图的地方很多，因为每次都是重复性的编写导致个人时间浪费，现阶段将其封装为一个插件，只要按照一定规则便可快速开发该模块。本人才疏学浅，简单对日常使用的幻灯片操作进行了一个封装，如若有好的想法欢迎提出来，共勉。 -- 钿佳

