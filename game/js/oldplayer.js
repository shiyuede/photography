$(()=>{
	$(".footer").load("http://www.codeboy.com/pro/dota2/js/footer.html");
});

$(()=>{
	$(window).scroll(()=>{
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var $f1=$(".container:nth-child(2)")
		var offsetTop=$f1.offset().top;
		if(offsetTop<=scrollTop+innerHeight/2){
			$(".aside").show()
		}else{
			$(".aside").hide()
		}
		var $floors=$(".container")
		for(var i=1;i<$floors.length;i++){
			var $f=$($floors[i]);
			if($f.offset().top>scrollTop+innerHeight/2){
				break;
			}
		}	
		if(i>0)
		$(`.aside>div:eq(${i-3})`).addClass("red")
		.siblings().removeClass("red")

		$(".aside").on("click","div",function(){
		var $a=$(this);		
		var j=$a.index();	
		var offsetTop=$(`.container:eq(${j+2})`).offset().top;
		console.log(offsetTop)
		$("html,body").stop(true).animate({
			scrollTop:offsetTop-50
		},500)	
		})
	})
	
});
