$(()=>{
	function isLogin(){
		$.get("http://www.codeboy.com/pro/dota2/js/data/login/isLogin.php")
		.then(data=>{
		 	var msg=JSON.parse(data)
			if(msg.code>0){
				var name=msg.name;
				$("#logined").html(name);
				$(".head_login>.user").show();
				$(".head_login>.login").hide();
			}
		})
	}
	
	isLogin();
//	登录
	$(".header").load("http://www.codeboy.com/pro/dota2/js/head-nav.html",function(){
		$(".content>span").click(()=>{
			$(".loginpage").hide();
		})
		//	登录
		$(".login>#login").click(()=>{
			console.log('r');
			$(".loginpage").show();
		})
		
		$(".content>.login").click(()=>{
			console.log('zzzzz')
			var msg=$("form.content").serialize();
			console.log(msg)
			var code=$("#checkcode").val();
			console.log(code)
			if($(".email>input").val()!=''&&$(".password>input").val()!=''){
				$(".content>p").hide()
				$.get({
					url:"http://www.codeboy.com/pro/dota2/js/data/login/checkCode.php",
					data:"code="+code,
					success:function(data){
						if(data=="true"){
							$(".content>p").hide()
							$.post({
								url:"http://www.codeboy.com/pro/dota2/js/data/login/login.php",
								data:msg,
								success:function(result){
									var data=JSON.parse(result)
									if(data.code>0){
										setTimeout(()=>{
											window.location.reload()
										},1000)	
									}else{
										$(".content>p").html("用户名或密码错误").show()
									}
								},
								error:function(){console.log(err)}
							})
						}else{
							$(".content>p").html("验证码错误").show()
						}
					},
					err:function(){console.log(err)}
				})
			}else{
				$(".content>p").html("用户名或密码不能为空").show()
			}
		})
//		退出登录
		$(".user>a").click(()=>{
			$.get({
				url:"http://www.codeboy.com/pro/dota2/js/data/login/logout.php"
			}).then(result=>{
				console.log(result)
				var data=JSON.parse(result)
				if(data.code>1){
					setTimeout(()=>{
						window.location.reload()
					},500)
				}
			})
		})
//点击图片，重新加载图片
		$(".code>img").click((e)=>{
			var $tar=$(e.target)
			$tar.src="data/login/getCode.php"/*tpa=http://www.codeboy.com/pro/dota2/js/data/login/getCode.php*/	
		})
		
	})	
})
