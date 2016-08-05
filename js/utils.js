define( function() {
  // Clears interface in preparation of a new interface
  function clear(id) {
    $(id).children().remove();
  }

  // Returns data stored in local storage
  function loadData() {

    return obj;
  }

  // Takes an object and stores it in local storage
  function saveData(obj) {

  }

  return {
    clear: clear,
    loadData: loadData,
    saveData: saveData
  }
});
