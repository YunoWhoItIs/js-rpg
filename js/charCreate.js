define( function() {
  // Generate stats depending on the job chosen
  function genStats(job) {
  }

  // Displays the character creation interface
  function launch() {
    var names = ['John', 'Maria', 'Louis', 'Eleanor'];
    var role = ['Swordsman', 'Gunner', 'Magician', 'Medic'];

    $("#block").append("<h1 class='title'>Character creation</h1>");

    // For each party member
    for(var i = 0; i < 4; i++) {
      $("#block").append("<div class='char-block' id='char-"
       + i + "'><h3 class='char-text'>Name</h3><input class='char-in-text dark-in' type='text' value='"
       + names[i] + "'/><h3 class='char-text'>Role</h3><select class='char-select dark-in' id='select-"
       + i + "'>");

      // Add all role to each select
      for(j in role) {
        $("#select-" + i).append("<option class='option' value='" + role[j] + "'>" + role[j] + "</option>");
      }
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
