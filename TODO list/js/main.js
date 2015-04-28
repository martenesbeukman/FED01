
var add = function(){
	var item = $("#item").val();
	$("#list").append('<li>'+item+'</li>');
}

$("#add").on("click", function(){

	add();
});