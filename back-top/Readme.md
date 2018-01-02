### 返回顶部插件
> 该插件基于jquery开发，通过点击指定元素来返回顶部，该demo只做简单css，请知悉。

##### [jquery封装插件的方法](http://blog.csdn.net/osdfhv/article/details/53185914)

##### html

```html
<div class="back-top"></div>
<script type="text/javascript" scr="js/back-top.js"></script>
```

##### js

```js
$('.back-top').backTop({time:1000})
```
##### 参数解析

参数 | 类型 |说明 | 示例值
---|---|---|---
time | Number/指定值 |（非必填）通过定义backTop({time:1000})中time参数来定义返回到顶部的时间，如为毫秒数时无需引号，默认为normal | 毫秒 （比如 1000）/ slow / normal / fast 
