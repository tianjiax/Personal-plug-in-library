### 全屏轮播图
> 该插件基于jquery开发，现阶段很多PC网站都需要用到幻灯片切换的效果，全屏幻灯片也是一种趋势，而且很多时候要在页面中复用该幻灯片，而且对于PC用户而言，IE8+用户居多，我们需要做一个兼容该用户群体的全屏幻灯片。这时候该插件便应运而生，我们可以通过简单的调用及样式来对其进行调用，从而完成快速开发的过程。该模块并非只能是轮播图，轮播图条目区域可以放上文字列表、图片等任意内容，这块在于你自己选择。接下来我们对该插件进行一个解析：

##### [jquery封装插件的方法](http://blog.csdn.net/osdfhv/article/details/53185914)

##### html
```html
<!-- 重置样式表 -->
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/4.1.1/normalize.css">
<!-- slide样式表 -->
<link rel="stylesheet" href="css/full-screen-slide.css">
<!-- html模块 -->
<div class="w-auto-Center" style="width:1200px">
	<div class="slide-box slide-box1" style="display: block;">
		<div class="slide-con">
			<div class="slide-out">
				<div class="slide-li act"><img src="http://tg.shanbane.com/tianjia_cesv3/images/temp/main2/slide/1.png" alt=""></div>
				<div class="slide-li"><img src="http://tg.shanbane.com/tianjia_cesv3/images/temp/main2/slide/2.png" alt=""></div>
				<div class="slide-li"><img src="http://tg.shanbane.com/tianjia_cesv3/images/temp/main2/slide/3.png" alt=""></div>
				<div class="slide-li"><img src="http://tg.shanbane.com/tianjia_cesv3/images/temp/main2/slide/4.png" alt=""></div>
				<div class="slide-li"><img src="http://tg.shanbane.com/tianjia_cesv3/images/temp/main2/slide/5.png" alt=""></div>
			</div>
		</div>
		<div class="slide-page">
			<div class="page-l"><img src="http://tg.shanbane.com/tianjia_cesv3/images/icon/page-l.png" alt=""></div>
			<div class="page-r"><img src="http://tg.shanbane.com/tianjia_cesv3/images/icon/page-r.png" alt=""></div>
		</div>
	</div>
</div>
<!-- 引入slide插件js文件 -->
<script src="js/full-screen-slide.js"></script>
```

##### js
```js
$('.slide-box').setSlide({
	slideTime: 3000,
	autoPlay:true
});
```
##### 参数解析
参数 | 类型 |说明 | 示例值
---|---|---|---
slideTime | number | 定义幻灯片自动播放的毫秒数，只有开启autoPlay属性时有效。如若为空，默认自动播放时间为2000毫秒 | 3000
autoPlay | boolean | 是否自动切换 		| true

