
var add = function(){
	var item = $("#item").val();
	$("#list").append('<li>'+item+'</li>');
}

var clear = function(){
	$("#list").empty();
}


$("#add").on("click", function(){

	add();
});

$("#clear").on("click", function(){

	clear();
});