### 60s倒计时
> 该插件基于jquery开发，主要应用于发送验证码时，或者避免多次操作时候，造成不必要短信发送或者刷点击量的问题。时间定义及后缀文字不一定为60秒，也可以为自己定义的秒数及文字。该demo只做简单的数据展示，未对css样式进行优化。注意：需要确保承载元素为button标签。

##### [jquery封装插件的方法](http://blog.csdn.net/osdfhv/article/details/53185914)

##### html
```html
<button class="form-btn" style='font-size:20px'>立即领取</button>
<script type="text/javascript" src="js/count-down.js"></script>
```

##### js
```
$('.form-btn').countDown({
	time:20,
	unit:'秒'
})
```

##### 参数解析
参数 | 类型 |说明 | 示例值
---|---|---|---
time | Number | 定义倒计时秒数的时间，默认为60秒	| 60
unit | 任意值 | 定义倒计时秒数的单位，默认为s 		| 秒 或 s