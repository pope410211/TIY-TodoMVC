var expect = require('chai'
);


(function(window) {

var taskList = [];

// using a JS package called chai  comes from installing via npm

// Other ways to write above code
//  var chai = require('chai");
//  expect = chai.expect;


// I can list my tasks...
var taskList = [ ];

// I can list my tasks...
function listTasks(){
}

// I can add  task to my list...
function addTaskToList(task, list){
  // What is the task? @param task
  // Where is the task going? @param list
  // What order / priority? @ lowest, on bottom
  return list.push(task);
  // add task to list somehow on the bottom
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
// console.log("This is taskList[0]", taskList[0])
// expect has to be assigned a function
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);
// expect what?
addTaskToList("Take out the trash", taskList);
// expect what now?
expect(taskList[1]).to.equal("Take out the trash")
expect(taskList.length).to.equal(2);
// console.log(taskList[0], taskList[1])

// I can prioritie my tasks
function orderTask(list, task){
  return list.pop(task);
}

expect(orderTask[1]).to.equal(0);

    console.log(list);

    addTaskToList("Remember the milk", list);

    console.log(list);
    // var element = document.querySelector('li');


// Write a dictionary using Object Literal Syntax (makes a dictionary and object)
    window.todos = {
      "addTaskToList": addTaskToList,
      "completeTask": completeTask,
      "deleteTask": deleteTask
    };
})(window);
