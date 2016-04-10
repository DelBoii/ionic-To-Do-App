angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Buy groceries", added: new Date()}
      , {title: "Clean dog", added: new Date()}
    ]
  };
  
  function addTask(title) {
    data.tasks.push({title: title, added: new Date()});
  }
  
  return {
    data: data
    , addTask: addTask
  };
});
