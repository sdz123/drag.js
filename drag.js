/**
* drag.js
* 可传默认参数:
* width : 300,    				父容器默认宽度
* height:300,  					父容器默认高度
* background: "hotpink",		父容器默认背景颜色
* h:10,							父容器内部拖动条高度
* backh:"green",				父容器内部拖动条背景颜色
* ht:0,							父容器内部拖动条距顶部距离
* 另:父容器与内部拖动条均定位 为absolute.
**/

;(function(){			
		$.fn.extend({
			tuozhuai : function(options){
				
				var defaults = {
					width : 300,
					height:300,
					background: "hotpink",
					position:"absolute",
					h:10,
					backh:"green",
					hposition:"absolute",
					ht:0,
					
				}
				var _defaults = $.extend({},defaults,options);
                 this.css({width:_defaults.width,
                 	height:_defaults.height,
                 	background:_defaults.background,
                 	position:_defaults.position,
                 	top:_defaults.top,
                 	left:_defaults.left});
                 	
                 	var td = $("<div/>")  //建立绿色顶部拖动div
                 	
                 	this.html(td)
                 	
                 	td.css({
                 		height:_defaults.h,
                 		background:_defaults.backh,
                 		position:_defaults.hposition,
                 		top:_defaults.ht,
                 		width:_defaults.width
                 	})
                 	
                 	var k = this;
                 	
				td.on("mousedown",function(ev){
					var currentX = ev.clientX,currentY = ev.clientY;
					var a = currentX-$(this).offset().left,b = currentY-$(this).offset().top;
					document.onmousemove =function(e){					
						var q = e.clientX-a,w = e.clientY-b;
						k.css({
							left:q,
							top:w
						})					
					}					
				})
				td.on("mouseup",function(){
						document.onmousemove = null;
				})								
		}
		 })
		}())