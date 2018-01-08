### 定位选中
> 该插件基于jquery开发，主要应用于时间轴或动态导航栏选中，在日常应用中可以配合其他插件一起使用达到更好的效果。

##### [jquery封装插件的方法](http://blog.csdn.net/osdfhv/article/details/53185914)

##### html
```html
<!-- 只是示例，tab模块，可以自己定义 -->
<div class="tab-ul">
	<div class="tab-li">1</div>
	<div class="tab-li">2</div>
	<div class="tab-li">3</div>
	<div class="tab-li">4</div>
</div>
<!-- 只是示例，内容模块，可以自己定义 -->
<div class="con-ul">
	<div class="con-li" style="height:800px;background: #ccc">1</div>
	<div class="con-li" style="height:800px;background: #ddd">2</div>
	<div class="con-li" style="height:800px;background: #eee">3</div>
	<div class="con-li" style="height:800px;background: #e1e1e1">4</div>
</div>
<script src="js/location-select.js"></script>
```

##### js
```js
$('.tab-ul').locSelect({
	locTab  		: $('.tab-ul .tab-li'),
	locCon			: $('.con-ul .con-li'),
	actClassName	: 'active'
})
```
##### 参数解析
参数 | 类型 |说明 | 示例值
---|---|---|---
locTab   	| Dom节点 | （必填）tab块的节点，Dom节点操作沿袭jquery的Dom节点操作 |　$('.tab-ul .tab-li')
locCon   	| Dom节点 | （必填）内容块的节点，Dom节点操作沿袭jquery的Dom节点操作 |　$('.con-ul .con-li')
actClassName  | string | （非必填）tab块选中的索引节点的类名，默认为'act'，可以按自己实际项目进行修改，无需加‘.’号 |　'active'