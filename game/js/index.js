$(()=>{
	$("#footer").load("http://www.codeboy.com/pro/dota2/js/footer.html");
/**************绑定点击播放动画,点x关闭动画*************/
	$("#play_video>img").click(()=>{
		$(".video_full").addClass("play")
		$(".video_detail>video")[0].currentTime=0;
		$(".video_detail>video")[0].play();
		
	})
	$("#remove_video").click(e=>{
		$(".video_full").removeClass("play");
	})
})



window.onload=function(){
	/*********活动的移动效果*********/
	$("#active_hover>li>div").hover(
		e=>{
			var $tar=$(e.target);
			$tar.parent().parent().animate({"top":-30},10);
			$tar.parent().parent().children(".drak").removeClass("selected");
			$tar.parent().parent().children(".u_highlight").addClass("selected")
		},
		e=>{
			var $tar=$(e.target);
			$tar.parent().parent().animate({"top":0},10);
			$tar.parent().parent().children(".u_highlight").removeClass("selected");
			$tar.parent().parent().children(".drak").addClass("selected")
		}
	);
	/*************新老玩家*************/
	$(".player>.new_play").hover(
		e=>{
			var $tar=$(e.target);
			$tar.css("top",170);
			$(".new_hero").removeClass("selected");
			$(".old_hero").addClass("selected");
		},
		e=>{
			var $tar=$(e.target);
			$tar.css("top",200);
		}
	)
	$(".player>.old_play").hover(
		e=>{
			var $tar=$(e.target);
			$tar.css("top",170);
			$(".old_hero").removeClass("selected");
			$(".new_hero").addClass("selected");
		},
		e=>{
			var $tar=$(e.target);
			$tar.css("top",200);
		}
	)
	$(".player>.old_play").click(()=>{
		location.href="http://www.codeboy.com/pro/dota2/js/oldplayer.html"
	})
}
