var shoppingList = (function($) {
  var $item_list = {
    todo: [],
    done: []
  },
    $input_field;

  $(function () {
    $item_list.todo = $("#listed_items");
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
              $current_item.addClass('done'); 
              $current_item.find('i').addClass('brighter'); 
              $current_item.find('svg').remove();
              $current_item.find('i').removeClass('fa-check').addClass('fa-trash-o');
              $current_item.find('button').off('click').on('click' , function(){
              $current_item.remove();
              })
          }
        });
        controlCheckbox($current_item.find('input')[0], "cross");
        return $current_item;
    }

    return {
      addItem: function(item_name) {
        $item_list.todo.append( createItem(item_name) );
        // dynamicAnimation();
        $input_field.val("");
      },
      move: function (item_name, from, to) { // this could be used in the future, not used just yet.
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
function jRem(name) {
    $('#' + name + " > li").has(":checked").remove(); 
}

