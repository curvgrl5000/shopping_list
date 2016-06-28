$(document).ready(function() {

      // var count = 0;
      var count = $("li").length;
  $(".shopping_list").on("click", ".cbutton", function( event ) {
    event.preventDefault();
    var addItem = $("input#shopping_items").val();

     if  ( addItem != "" ) {
        $(".listed_items").append(
               '<li><input id=\"cb'+count+ '"name=\"cb'+count+ '"type=\"checkbox\" ><label for=\"cb'+count+ '">' 
               +addItem+ '</label><button class=\"cbutton cbutton--effect-jelena right\"><i class=\"cbutton__icon fa fa-fw fa-trash-o\"></i><span class=\"cbutton__text\">delete</span></button></li>');
        count++;
        $(this).parent().children("input").val(""); 
      } else {
        alert("Please add an Item!");
      };
  });


});















