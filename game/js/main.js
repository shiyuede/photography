/******************************引入头**********************************/
$(()=>{
	$("#footer").load("http://www.codeboy.com/pro/dota2/js/footer.html");
})
/******************************大轮播图***********************************/
$(()=>{
	var duration=500,wait=3000,moved=0;
		var LIWIDTH=1904,timer=null;
		
		var $ul=$(".u_banners>ul");
		function move(){
			$ul.animate({			
				left:-LIWIDTH*moved
			},duration,function(){
				if(moved==3){
					moved=0;
					$ul.css("left",0)
				}
				$ul.siblings(".btns").children().removeClass("hover");
				$ul.siblings(".btns").children(`:eq(${moved})`).addClass("hover")
			});	
		}
		timer=setInterval(()=>{
			moved++;
			move();	
		},duration+wait);
		
		$(".btns").on("mouseover","i",e=>{
			clearInterval(timer);
			$ul.stop(true);
			moved=$(e.target).index();
			move();
		});
		
		$("[data-move=left]").click(e=>{		
			if(!$ul.is(":animated")){
				if(moved==0){
					moved=3;
					$ul.css("left",-LIWIDTH*moved)
				}
				moved--;
				move();			
			}
		});
		$("[data-move=right]").click(e=>{
			if(!$ul.is(":animated")){
				moved++;
				move();
			}
		})	
		$(".u_banners").hover(
			()=>{
				clearInterval(timer);
				$ul.stop(true);
			},
			()=>{
				timer=setInterval(()=>{
					moved++;
					move();
				},duration+wait)
			}
		)	

});
/***************************赛事热点轮播图****************/
$(()=>{
	var duration=500,wait=3000,moved=0;
	var LIWIDTH=420,timer=null;
	var $ul=$(".match_banner>ul");
	
	function move(){
		$ul.animate({			
			left:-LIWIDTH*moved
		},duration,function(){
			if(moved==4){
				moved=0;
				$ul.css("left",0)
			}
			$(".match_banner_btns>ul>li").children().removeClass("hover");
			$(".match_banner_btns>ul>li").children(`:eq(${moved})`).addClass("hover")
		});	
	}
	
	timer=setInterval(()=>{
		moved++;
		move();	
	},duration+wait);
	
	$(".match_banner_btns>ul>li>span").mouseover(e=>{
		e.preventDefault();
		clearInterval(timer);
		$ul.stop(true);
		moved=$(e.target).parent().index();
		move();
	});

	$(".match_banner").hover(
		()=>{
			clearInterval(timer)
			$ul.stop(true);
		},
		()=>{
			timer=setInterval(()=>{
				moved++;
				move();
			},duration+wait)
		}
	)	
});
/*************************活动中心图片切换*****************/
$(()=>{
	$(".active_lists>.active_type").mouseover(function(){
		var $tar=$(this)
		$tar.addClass("choosed");
		$tar.siblings().removeClass("choosed")
		var i=$tar.index();
		$(".active_container").children().removeClass("selected");
		/*var $ds=$(".active_container").children()
		for(var d of $ds){
			var ii=$(d).index();
			if(i==ii){
				$(d).addClass("selected");
			}
		}*/
//		console.log($(".active_container").children(`.active_container_pic:eq(${i})`))
		$(".active_container").children(`div:eq(${i})`).addClass("selected")
		
	})
})
/******************************新闻中心图片切换*******************************/
$(()=>{
	$(".news_content>.u_tabs").on("click","li",e=>{
		var $tar=$(e.target);
		var i=$tar.index();
		$tar.siblings().removeClass("choosed");
		$tar.addClass("choosed")
		$tar.parent().next().children().removeClass("selected");
		$tar.parent().next().children(`li:eq(${i})`).addClass("selected")
	})
})









