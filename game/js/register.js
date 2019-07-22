$(()=>{
	var msgStr=$("form").serialize();
/**************************鼠标离开后开始判断**********/
$("form").on("blur","div>input",(e)=>{
	var $tar=$(e.target);	
	if($tar.val()==''){
		$tar.next().html("不能为空").show();
	}else{
		$tar.next().hide();
	}
	if($tar.parent().hasClass("confirm")&&$tar.val()!=''){
		var password=$(".password>input").val()
		if(password!==$tar.val()){
			$tar.next().html("密码不一致").show();
		}else{
			$tar.next().hide();
		}
	}
})
	
/********点击后注册*************/
	$(".btn").click(()=>{
		var msg=$("form").serialize();
		var $inputs=$("form").find("input");
		var m=0;
		var password=$(".password>input").val();
		var confirmCode=$(".confirm>input").val();
		if(confirmCode!==password){
			$(".confirm>input").next().html("密码不一致").show();
		}
		for(var i=0;i<$inputs.length-1;i++){
			var $tar=$($inputs[i])
			if($tar.val()==''){
				$tar.next().html("不能为空").show();
				m++;
			}
		}

		if(m===0&&confirmCode===password){
			$.post({
			url:"http://www.codeboy.com/pro/dota2/js/data/userlist/register.php",
			data:msg,
			dataType:"json",
			success:function(data){
				var result=JSON.parse(data)
				if(result.code==1){
					window.location.href=history.back()
				}else{
					$(".emai>input").next().html("用户已存在").show();
				}
			},
			error:function(){console.log("网络故障，请检查!")}
			})
		}
		
	})
})
