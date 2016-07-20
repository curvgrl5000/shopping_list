var shoppingList = (function($) {
  var $item_list = {
    todo: [],
    done: []
  },
    $input_field;

  $(function () {
    $item_list.todo = $(".listed_items");
    $item_list.done = $("#completed");
    $input_field = $('.input_field').children("input");
  });

  var count = 0;
    function uid() {
       return ++count;
    }

    var $list_item = $('<li><input type="checkbox"><label>'
      + '</label><button class="cbutton cbutton--effect-jelena right" type="button"><i class="cbutton__icon fa fa-fw fa-check"></i></button></li> ' );
    
    function createItem(item_name) {
      var id = uid(),
            $current_item = $list_item.clone();

        $current_item.find('input').prop('id', 'cb' + id);
        $current_item.find('label').prop('for', 'cb' + id);
        $current_item.find('label').text(item_name);

        $current_item.find('button').on('click', function () {
          if  ($('input[type=checkbox]',$current_item).is( ':checked' ))  {  
            $current_item.appendTo($item_list.done);   //appendTo implicitly removes the DOm Object from its current place; 
          }
        });
        return $current_item;
    }

    return {
      addItem: function(item_name) {
        $item_list.todo.append( createItem(item_name) );
        dynamicAnimation();
        $input_field.val("");
      },
      move: function (item_name, from, to) {
        $item_list[from]
        $item_list[to];
      }
    }

})($); // immediate function

$(document).ready(function() {
  ['Milk','Trash Bag', 'Water', 'Liquid', 'Hair Stuff'].forEach(shoppingList.addItem);

  // ADD AN ITEM DYNAMICALLY
  $(".shopping_list").on("click", ".cb_add", function( event ) {
    event.preventDefault();
    var addItem = $("input#shopping_items").val();
    addItem === "" ? alert("Please add an Item!") : shoppingList.addItem(addItem);

  });
});

// REMOVE ALL OF THE LISTED ITEMS
function jRem() {
    $('.listed_items > li').has(":checked").remove(); 
}

// REMOVE ONE OF THE LISTED ITEMS //  A function call
// function jRemOne(item) {
//   if  ($('input[type=checkbox]',item).is( ':checked' ))  {
//     item.remove();
//   }
// }

////////////////////////////////////////////////////////////////////
// LOCAL STORAGE TESTING
// function storageAvailable(type) {
//   try {
//     var storage = window[type],
//       x = '__storage_test__';
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   }
//   catch(e) {
//     return false;
//   }
// }

// if (storageAvailable('localStorage')) {
//   console.log("Yippee! We can use localStorage awesomeness")
// }
// else {
//   console.log("Too bad, no localStorage for us")
// }


// if (storageAvailable('sessionStorage')) {
//   console.log("Yippee! We can use sessionStorage awesomeness")
// }
// else {
//   console.log("Too bad, no localStorage for us")
// }



