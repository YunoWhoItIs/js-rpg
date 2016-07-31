$("#block").append("<h1 class='title'>Character creation</h1>");

for(var i = 0; i < 4; i++) {
  $("#block").append("<div class='char-block' id='char-one'><h3 class='char-text'>Name</h3><input class='char-in-text dark-in' type='text' /><h3 class='char-text'>Role</h3><select class='char-select dark-in'><option class='option' selected value='swordsman'>Swordsman</option><option class='option' value='gunner'>Gunner</option><option class='option' value='magician'>Magician</option></select></div>");
}

$("#block").append("<button class='btn' type='button'>Submit</button>");
