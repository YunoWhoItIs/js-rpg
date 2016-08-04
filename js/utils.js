define( function() {
  // Clears interface in preparation of a new interface
  function clear(id) {
    $(id).children().remove();
  }

  return {
    clear: clear
  }
});
