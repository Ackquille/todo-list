// Check off specififc todos by click
$("ul").on("click", "li", function() {
	$(this).toggleClass("complete");
});




// Click X to delete
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	})
	e.stopPropagation();
});


$("input[type='text'").keypress(function(e) {
	if(e.which === 13) {
		// Grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// Create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li")
	}
});


$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle();
});










// ** Long Version **

// if($(this).css("color") === "rgb(128, 128, 128)") {

// 	$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// }


// else {
// 	$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// }