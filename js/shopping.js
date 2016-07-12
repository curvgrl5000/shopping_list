$(document).ready(function() {
  var count = $("li").length + 1;

  $(".shopping_list").on("click", ".cb_add", function( event ) {
    event.preventDefault();
    var addItem = $("input#shopping_items").val();

     if  ( addItem != "" ) {
        $(".listed_items").append(
               '<li><input id=\"cb'+count+ '"name=\"cb'+count+ '"type=\"checkbox\" ><label for=\"cb'+count+ '">' 
               +addItem+ '</label><button class=\"cbutton cbutton--effect-jelena right\" type=\"button\" onclick=\"jRem()\"><i class=\"cbutton__icon fa fa-fw fa-trash-o\"></i></button></li>');
        count++;
        $(this).parent().children("input").val(""); 
      } else {
        alert("Please add an Item!");
      }
  });
});


// A SIMPLER WAY
function jAdd() {
    $('#listed_itemss').append('<li><input type="checkbox" /> item</li>');
}

function jRem() {
    $('.listed_items').children().filter(function () {
        return this.firstChild.checked;
    }).remove();
}
