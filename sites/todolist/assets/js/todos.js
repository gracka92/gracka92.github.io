// Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
	//grabbing new todo text from input	
		var newToDo = $(this).val();
		$(this).val(""); //empty input
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>")
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});



