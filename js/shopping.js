var createShoppingItem = (function($) {
    var $listed_items = $(".listed_items");
    var count = 5;
    function uid() {
        ++count;
    }
    var $list_item = $('<li><input type="checkbox"><label>'
      + '</label><button class="cbutton cbutton--effect-jelena right" type="button"><i class="cbutton__icon fa fa-fw fa-trash-o"></i></button></li> ' );

    return function(addItem) {
      var id = uid(),
          $current_item = $list_item.clone();

      $current_item.find('input').prop('id', 'cb' + id);
      $current_item.find('label').prop('for', 'cb' + id);
      $current_item.find('label').text(addItem);

      $current_item.find('button').on('click', function () {
        jRemOne($current_item);
      });
      $listed_items.append($current_item)
    }

})($); // immediate function

$(document).ready(function() {
  ['Milk','Cheese'].forEach(createShoppingItem);
  // ADD AN ITEM DYNAMICALLY
  $(".shopping_list").on("click", ".cb_add", function( event ) {
    event.preventDefault();
    var addItem = $("input#shopping_items").val();
    if ( addItem != "" ) {
      createShoppingItem(addItem);
      $(this).parent().children("input").val("");
      dynamicAnimation();
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
function jRemOne(item) {
  if  ($('input[type=checkbox]',item).is( ':checked' ))  {
    item.remove();
  }
}

// ADD THE LOCALLY STORED ITEMS TO A LIST
function completedTasks() {
  var allItems = [];
  var completedTasks = [];

  var addItem = $("input#shopping_items").val();
  var id = $("#cb");
  localStorage.setItem(id, addItem);
  var value = localStorage.getItem(id, addItem);
  $("#completed").append(
    '<li>' + value + '</li>'
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



