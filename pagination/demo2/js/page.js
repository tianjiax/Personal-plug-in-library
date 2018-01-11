(function($){
    var ms = {
        init:function(obj,args){
            //使用parData属性来接受参数，使得参数在提取出来的函数中使用
            ms.parData.obj = obj;
            ms.parData.args = args;

            return (function(){
                ms.fillHtml(obj,args);
                ms.unbindEvent(obj, args);
                ms.bindEvent(obj,args);
            })();
        },
        // 接受参数的属性
        parData: {
            
        },
        //填充html
        fillHtml:function(obj,args){
            return (function(){
                obj.empty();
                //上一页
                if(args.current > 1){
                    obj.append('<a href="javascript:;" class="prevPage">上一页</a>');
                }else{
                    obj.remove('.prevPage');
                    obj.append('<span class="disabled">上一页</span>');
                }
                //中间页码
                if(args.current != 1 && args.current >= 4 && args.pageCount != 4){
                    obj.append('<a href="javascript:;" class="tcdNumber">'+1+'</a>');
                }
                if(args.current-2 > 2 && args.current <= args.pageCount && args.pageCount > 5){
                    obj.append('<span>...</span>');
                }
                var start = args.current -2,end = args.current+2;
                if((start > 1 && args.current < 4)||args.current == 1){
                    end++;
                }
                if(args.current > args.pageCount-4 && args.current >= args.pageCount){
                    start--;
                }
                for (;start <= end; start++) {
                    if(start <= args.pageCount && start >= 1){
                        if(start != args.current){
                            obj.append('<a href="javascript:;" class="tcdNumber">'+ start +'</a>');
                        }else{
                            obj.append('<span class="current">'+ start +'</span>');
                        }
                    }
                }
                if(args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5){
                    obj.append('<span>...</span>');
                }
                if(args.current != args.pageCount && args.current < args.pageCount -2  && args.pageCount != 4){
                    obj.append('<a href="javascript:;" class="tcdNumber">'+args.pageCount+'</a>');
                }
                //下一页
                if(args.current < args.pageCount){
                    obj.append('<a href="javascript:;" class="nextPage">下一页</a>');
                }else{
                    obj.remove('.nextPage');
                    obj.append('<span class="disabled">下一页</span>');
                }
            })();
        },

        //函数部分,注意其中的参数修改了
        fun: {
            numEvent: function(){
                var current = parseInt($(this).text());
                ms.fillHtml(ms.parData.obj,{"current":current,"pageCount":ms.parData.args.pageCount});
                if(typeof(ms.parData.args.backFn)=="function"){
                    ms.parData.args.backFn(current);
                }
            },
            prevEvent: function(){
                var current = parseInt(ms.parData.obj.children("span.current").text());
                ms.fillHtml(ms.parData.obj,{"current":current-1,"pageCount":ms.parData.args.pageCount});
                if(typeof(ms.parData.args.backFn)=="function"){
                    ms.parData.args.backFn(current-1);
                }
            },
            nextEvent: function(){
                var current = parseInt(ms.parData.obj.children("span.current").text());
                ms.fillHtml(ms.parData.obj,{"current":current+1,"pageCount":ms.parData.args.pageCount});
                if(typeof(ms.parData.args.backFn)=="function"){
                    ms.parData.args.backFn(current+1);
                }
            }
        },
        // 解除绑定事件
        unbindEvent: function(obj, args) {
            return (function(){
                obj.off("click","a.tcdNumber",ms.fun.numEvent);
                //上一页
                obj.off("click","a.prevPage",ms.fun.prevEvent);
                //下一页
                obj.off("click","a.nextPage",ms.fun.nextEvent);
            })();
        },
        //绑定事件
        bindEvent:function(obj,args){
            return (function(){
                obj.on("click","a.tcdNumber",ms.fun.numEvent);
                //上一页
                obj.on("click","a.prevPage",ms.fun.prevEvent);
                //下一页
                obj.on("click","a.nextPage",ms.fun.nextEvent);
            })();
        }
    }
    $.fn.createPage = function(options){
        var args = $.extend({
            pageCount : 15,
            current : 1,
            backFn : function(){}
        },options);
        $(this).addClass("component-page");
        ms.init(this,args);
    
    }
})(jQuery);

