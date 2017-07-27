$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
})

$("ul").on("click", ".delete", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		newTodo();
		$("input[type='text']").val("");
	}
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})

function newTodo() {
	var todoText = $("input").val();
	$("ul").append("<li><span class=\"delete\"> <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </span>" + todoText + "</li>");
}