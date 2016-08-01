define( function() {
  // Default adventurer names
  var names = ['John', 'Maria', 'Louis', 'Eleanor'];
  // Define roles and stat modifiers
  var roles = {
    'Swordsman':[3, 2, 1, 0, 0, 3, 1],
    'Gunner':[2, 3, 1, 2, 0, 1, 1],
    'Magician':[1, 1, 2, 1, 3, 0, 2],
    'Medic':[0, 2, 1, 1, 2, 1, 3]
  }

  // Generate stats depending on the job chosen
  function genStats() {
    // str - attack : end - defence : agi - evasion : spd - speed
    // int - magic : con - health : luk - crit/miss chance
    var baseStats = [10, 10, 10, 10, 10, 10, 10];
    var arr = [0, 0, 0, 0, 0, 0, 0];

    // For each role
    $.each(roles, function(key, value) {
      // For each value
      for(i in value) {
        var variation = Math.round(Math.random() * (3 - 1));

        // Add doubled values to basestats then add variation from 0 to 2
        arr[i] = (baseStats[i] + (value[i] * 2)) + variation;
      }
      console.log(arr);
    });
  }

  // Displays the character creation interface
  function launch() {
    $("#block").append("<h1 class='title'>Character creation</h1>");

    // For each party member
    for(var i = 0; i < 4; i++) {
      $("#block").append("<div class='char-block' id='char-"
       + i + "'><h3 class='char-text'>Name</h3><input class='char-in-text dark-in' type='text' value='"
       + names[i] + "'/><h3 class='char-text'>Role</h3><select class='char-select dark-in' id='select-"
       + i + "'>");

      // Add all roles to each select
      $.each(roles, function(key) {
        $("#select-" + i).append("<option class='option' value='" + key + "'>" + key + "</option>");
      });
      $("#block").append("</select></div>");
    }
    $("#block").append("<button class='btn' id='createBtn' type='button'>Submit</button>");
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

  function submitParty() {
    // On submit, check for red borders
    $("#createBtn").on("click", function() {
      if($(".char-in-text").hasClass("red-border")) {
        console.log("can't proceed");
      } else {
        // Store character data in local storage
        console.log("all good");
      }
    });
  }

  return {
    genStats: genStats,
    launch: launch,
    checkInput: checkInput,
    submitParty: submitParty
  }
});
