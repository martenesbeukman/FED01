
var list = [];

var add = function(item){

    var listItem = {};

    Object.defineProperty(listItem, 'todo', {
        value: item,
        writable:false
    });

	list.push(listItem);
	$("#list").append('<li>'+listItem.todo+'</li>');
}

var clear = function(){
	list = [];
	$("#list").empty();
}

$("#add").on("click", function(){
	var item = $("#item").val();
	if(item)
		add(item);
});

$("#clear").on("click", function(){

	clear();
});
