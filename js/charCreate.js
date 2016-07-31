define( function() {
  // Clears interface in preparation of a new interface
  function clear(id) {
    $(id).children().remove();
  }

  // Displays the character creation interface
  function launch() {
    $("#block").append("<h1 class='title'>Character creation</h1>");

    for(var i = 0; i < 4; i++) {
      $("#block").append("<div class='char-block' id='char-one'><h3 class='char-text'>Name</h3><input class='char-in-text dark-in' type='text' /><h3 class='char-text'>Role</h3><select class='char-select dark-in'><option class='option' selected value='swordsman'>Swordsman</option><option class='option' value='gunner'>Gunner</option><option class='option' value='magician'>Magician</option></select></div>");
    }
    $("#block").append("<button class='btn' type='button'>Submit</button>");
  }

  // Check for valid input in text fields
  function checkInput() {
    $(".char-in-text").change(function() {
      var match = /^[0-9a-zA-Z]+$/.test($(this).val());
      // Check input is between 1-16 chars and is alphanumeric
      if((($(this).val().length < 1) || ($(this).val().length > 16)) || (match != true)) {
        $(this).addClass("red-border");
      } else {
        $(this).removeClass("red-border");
      }
    });
  }

  // Store character data in local storage
  function storeData() {

  }

  return {
    clear: clear,
    launch: launch,
    checkInput: checkInput,
    storeData: storeData
  }
});
