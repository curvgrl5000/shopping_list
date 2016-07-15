$(document).ready(function() {
  
  // ADD AN ITEM DYNAMICALLY
  $(".shopping_list").on("click", ".cb_add", function( event ) {
    event.preventDefault();
    var count = $("li").length + 1;
    var addItem = $("input#shopping_items").val();

     if  ( addItem != "" ) {
        $(".listed_items").append(
               '<li><input id="cb' + count + '"  name="cb' + count + '" type="checkbox"><label for= "cb' + count + '" >' 
               +addItem+ '</label><button class="cbutton cbutton--effect-jelena right" type="button" onclick="jRemOne(\'cb' + count + ' \')"><i class="cbutton__icon fa fa-fw fa-trash-o"></i></button></li> ' );
        count++;
        $(this).parent().children("input").val("");
        dynamicAnimation();
       // localStorage.setItem(addItem);
      } else {
        alert("Please add an Item!");
      }
  });
});

// REMOVE ALL OF THE LISTED ITEMS
function jRem() {
    $('.listed_items').children().filter(function () {
        return this.firstChild.checked;
    }).remove();
}

// REMOVE ONE OF THE LISTED ITEMS
function jRemOne(current_count) {
  if  ($('#'+ current_count).is( ':checked' ))  {
    $('#'+ current_count).closest('li').remove();
  }
  console.log($(this));  
}

function completedTasks() {
  var addItem = $("input#shopping_items").val();
  var id = $("#cb")
  localStorage.setItem(id, addItem);
  var value = localStorage.getItem(id, addItem);
  $("#completed").append(
    '<li> Great job, you got ' + value + ' done!</li>'
    );
}

////////////////////////////////////////////////////////////////////

// A SIMPLER WAY for test case button
function jAddThis() {
    $('#listed_itemss').append('<li class="test"><input type=\"checkbox\" /><label> item</label><button class=\"cbutton cbutton--effect-jelena right\" type=\"button\" onclick=\"jRemOne()\"><i class=\"cbutton__icon fa fa-fw fa-trash-o\"></i></button></li></li>');
}

//REMOVE ALL OF THE LISTED ITEMS for test case button
function jRemAll() {
    $('#listed_itemss').children().filter(function () {
        return this.firstChild.checked;
    }).remove();
}

////////////////////////////////////////////////////////////////////
// LOCA STORAGE TESTING
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}

if (storageAvailable('localStorage')) {
  console.log("Yippee! We can use localStorage awesomeness")
}
else {
  console.log("Too bad, no localStorage for us")
}


if (storageAvailable('sessionStorage')) {
  console.log("Yippee! We can use sessionStorage awesomeness")
}
else {
  console.log("Too bad, no localStorage for us")
}

////////////////////////////////////////////////////////////////////
// TESTING IF STORAGE HAS BEEN POPULATED



