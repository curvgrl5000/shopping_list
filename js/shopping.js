$(document).ready(function() {

	$(".shopping_list").on("click", ".cbutton", function( event ) {
		event.preventDefault();
		var itemToAdd = $("input#shopping_items").val();
		 if  ( itemToAdd == "" ) {
   		 	alert("Please add an Item!");
  		}
	});


});








