$(document).ready(function() {
	$("#shopping_items input").submit( function() 
	{
		if(   $(this).val().length === 0 ) {  
			alert("Sorry the field can't be blank!");
			event.preventDefault();
		}
		else
		{
		console.log("Everything is okay");
	});
});