/*************头部和尾部导入**********/
$(()=>{
	$("#footer").load("http://www.codeboy.com/pro/dota2/js/footer.html");
});

$(()=>{
	$(".hero_top>.store").click(()=>{
		confirm('使用快捷键 Ctrl+D 或 Cmd+D 来收藏此页！')
	})
	
	
	
	
	
	
	
	
	
	
	$(document).ready(()=>{
/*******************图片载入********************/
		var attr1=$("#power").attr("id");
		var attr2=$("#yare").attr("id");
		var attr3=$("#master").attr("id");
		$.ajax({
			type:"GET",
			url:"http://www.codeboy.com/pro/dota2/js/data/heroes/hero_load.php",
			data:{attr1,attr2,attr3},
			dataType:"json",
			success:function(data){	
				var heroesArray=[];
				var power=data.power;
				var yare=data.yare;
				var master=data.master;
				var html="";				
				for(var p of power){
					var obj={}
					html+=`<li>
								<div data-horo_name="${p.heroes}" id="${p.uid}" class="hover">
									<img src="${p.sf}" alt=""  class="hero_small"/>
									<img src="${p.bf}" alt=""  class="hero_large"/>
								</div>
							</li>`
					obj["uid"]=p.uid
					obj["heroes"]=p.heroes
					heroesArray.push(obj)
				}
				$("#power").html(html);
				
				var html="";
				for(var y of yare){
					var obj={}
					html+=`<li>
								<div data-horo_name="${y.heroes}" id="${y.uid}" class="hover">
									<img src="${y.sf}" alt=""  class="hero_small"/>
									<img src="${y.bf}" alt=""  class="hero_large"/>
								</div>
							</li>`
					obj["uid"]=y.uid
					obj["heroes"]=y.heroes
					heroesArray.push(obj)
				}
				$("#yare").html(html);
				
				var html="";
				for(var m of master){
					var obj={}
					html+=`<li>
								<div data-horo_name="${m.heroes}" id="${m.uid}" class="hover">
									<img src="${m.sf}" alt=""  class="hero_small"/>
									<img src="${m.bf}" alt=""  class="hero_large"/>
								</div>
							</li>`
					obj["uid"]=m.uid
					obj["heroes"]=m.heroes
					heroesArray.push(obj)
				}
				$("#master").html(html);
				var result=$("#hn").html();
				for(var r of heroesArray){
					result+=`
						<option value="${r.uid}">${r.heroes}</option>
					`
				}
				$("#hn").html(result)
				
			},
			error:function(){console.log("网络故障，请检查！")}
		}).then(()=>{
			
			/*******给图片添加hover功能*******************/
			$("#heroesBox>ul>li>div.hover").hover(
				e=>{
					var $tar=$(e.target)
//					console.log($tar.parent().css("opacity"));
					if($tar.parent().css("opacity")!=0.1){
						$tar.parent().children(".hero_large").show()
						$tar.parent().parent().css("z-index","10")
						/**************************显示出当前英雄属性********************/
						var uid=$tar.parent().attr("id");
//						console.log(uid);
						$.ajax({
							type:"GET",
							url:"http://www.codeboy.com/pro/dota2/js/data/heroes/hero_show.php",
							data:{uid},
							success:function(data){
								$("#show>.hero_name").html(data.heroes)
								var html="";
				//				ranged,carry,disabler,initiator,jungler,tank,support,nuker,pusher,escape
								html+=data.ranged==1?"远程":"近战";
								html+=data.carry==1?" - 核心":"";
								html+=data.disabler==1?" - 控制":"";
								html+=data.initiator==1?" - 先手":"";
								html+=data.jungler==1?" - 打野":"";
								html+=data.tank==1?" - 耐久":"";
								html+=data.support==1?" - 辅助":"";
								html+=data.nuker==1?" - 爆发":"";
								html+=data.pusher==1?" - 推进":"";
								html+=data.escape==1?" - 逃生":"";
								$("#show>.hero_attr").html(html)		
							},
							error:function(){
								console.log("网络故障，请检查！")
							}
						})
					}
				},
				e=>{
					var $tar=$(e.target)
					$tar.parent().children(".hero_large").hide()
					$tar.parent().parent().css("z-index","2")
				}
			)
			
			/*****************************过滤器选择*****************/
			$("#selects").on("change","select",function(){
				var at=$("#hero_position").val();
				var ranged=$("#hero_attack").val();
				var id=$("#hn").val();
				if(at==""&& ranged==""&& id==""){
					$("#heroesBox>ul>li>div").removeClass("unselected").addClass("hover");
				}else{
					$.ajax({
						type:"GET",
						url:"http://www.codeboy.com/pro/dota2/js/data/heroes/hero_selector.php",
						data:{at,ranged,id},
						success:function(datas){
							var $divs=$("#heroesBox>ul>li>div")
							$("#heroesBox>ul>li>div").removeClass("unselected").addClass("hover");
							for(var data of datas){
								var p=data[0];
								for(var d of $divs){									
									var id=$(d).attr("id");
									if(id==p){
										$(d).addClass("unselected").removeClass("hover");
									}
								}
							}	
						},
						error:function(){
							console.log("网络故障，请检查！")
						}
					})
				}	
			})
			
			
			
			
		})
	})
})
