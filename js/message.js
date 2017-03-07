var rf = new Wilddog("https://zzes-text.wilddogio.com/message");



$("#sendbtn").click(function(){
	var childref = rf.push({
		"title" : $("#title").val(),
		"word" : $("#word").val()
	});
});

function addLi(obj,snap){
	var ul = document.getElementById(obj);

	var li = document.createElement("li");

	li.setAttribute("id","newli");
	li.innerHTML = "<div class='alert alert-success' role='alert'><h4>"+snap.val().title+"</h4><hr><br><p>"+snap.val().word+"</p><br></div>";
	ul.appendChild(li);
}

rf.orderByChild("title").on("child_added", function(snapshot) {
  console.log(snapshot.key() + " was " + snapshot.val().title+snapshot.val().word+ " meters tall");
  addLi("wordul",snapshot);
  
});

