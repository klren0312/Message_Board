
var ref = new Wilddog("https://zzes-text.wilddogio.com");
var email = $("#Radmin").val();
var pwd= $("#Rpwd").val();
//注册代码
function zhuce(){
	ref.createUser({email:$("#Radmin").val(),password:$("#Rpwd").val()},
	function(err,data){
		if(err!==null){
			alert("注册失败");
			console.log("error");
		}else{
			alert("注册成功");
			console.log("success!");
		}
	});
}
//登录代码
function denglu(){
	ref.authWithPassword({email:$("#Ladmin").val(),password:$("#Lpwd").val()},
		function(err,data){
			if(err!==null){
				console.log("error");
				alert("登录失败，请重新登陆！");
			}else{
				console.log("success");
				window.location.href="index_user.html"; 
			}
		});
}
//退出登录
function exit(){
	ref.unauth();
	window.location.href="index.html"; 
}
//重置密码
function reset(){
	var person = {
		email : document.getElementById('eeem').innerHTML 
	};
	ref.resetPassword(person,function(){console.log("success")});
}



