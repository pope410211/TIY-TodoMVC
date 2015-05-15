(function (window) {
	'use strict'; // For bonus points what does this do?
// debugger;



	//  CONTROLLER FOR: I can add a task to my list...
	//  1. What event should I be listening for? keydn, keyup, keypress
	//  2. what element makes since to listen for that event? input.new-todo
	//  3. What do I need to do when that event fires?

					// one way to write the query selector
						// document.querySelector('input.new-todo');
						// .addEventListener('keydn', function addTodoController(){
						// })
		var newTodoInput = document.querySelector('input.new-todo')


		// TO ADD NEW TASK:
		// GIVEN an HTML element <input class="new-todo">
		// WHEN the user types a task AND presses the "ENTER" key

		// newTodoInput.addEventListener('keyup', function(){ console.log(arguments);})
		newTodoInput.addEventListener('keyup', function addTodoController(event){
				if (event.keyCode === 13){// AND presses the "ENTER" key

				var task = document.querySelector('input.new-todo').value;
				todos.taskList.push(task);


				document.querySelector('ul.todo-list').textContent = todos.taskList;
						document.querySelector('input.new-todo').value = "";

						if (todos.taskList.length === 1) {
							document.querySelector('span.todo-count').textContent = (todos.taskList.length +" "+ 'Item Left');
						} else {
				 document.querySelector('span.todo-count').textContent = (todos.taskList.length +" "+ 'Items Left');
			};



					console.log(todos.taskList);

					// THEN:
					// DONE  Save the thing to remember (task) to the list of things to remember(taskList)
					// DONE  Remove the things to remember(task) from the "what needs to be done?"box(input new todo)
					// TODO  Update the number of tasks in the footer...
					// TODO  Add a new task(ul.todo-list > li) to the list of tasks in the display (ul.todo-list)
				}

				var deleteTask = document.querySelector('ul.todo-list');

				deleteTask.addEventListener('mouseover', function() {
					console.log("Hello Clarise");
				})

					var deleteTaskButtons = document.querySelectorAll('button.destroy');

					_.forEach(deleteTaskButtons, function(element, index, deleteTaskButtons){
						element.addEventListener('click', function(){
							console.log("I'm Sorry Dave, I cannot allow you to do that.");
						});
					});

					var editTask = document.querySelectorAll('li');

					// editTask.addEventListener('dblclick', function() {

					_.forEach(editTask, function(element, index, editTask){
						element.addEventListener('dblclick', function(){
							console.log("Click me one more time")
						})
					})

					// });
					// deleteTaskButton.addEventListener('click', function() {


	});

	var checkBox = document.querySelectorAll('input.toggle');

	// editTask.addEventListener('dblclick', function() {

	_.forEach(checkBox, function(element, index, editTask){
		element.addEventListener('click', function(){
			console.log("Check Mate")
		})
	})



	// END addEventListner (addTodoController)

// function lookMaArguments(){ console.log(arguments);}
	// lookMaArguments();
	// lookMaArguments(1, 2, 3);
	// lookMaArguments('hello', 'clarise');
	// var element = document.querySelector('li');

/**		_.forEach(element, function(element, index, elements){
		    element.addEventListener('click', function(){
		        element.childElement.classList.toggle('checkbox');
		    });
			});*/

})(window);


		// CONTROLLER FOR: I can delete a task from my list...
    // 1. What event should I be listening for?    Mouseover, Click
    // 2. What element makes sense to listen for that event? (ul.todo-list)
    // 3. What do I need to do when that event fires?

    // CONTROLLER FOR: I can edit a task on my list...
    // 1. What event should I be listening for?
    // 2. What element makes sense to listen for that event?
    // 3. What do I need to do when that event fires?


    // CONTROLLER FOR: I can complete a task on my list...
    // 1. What event should I be listening for?
    // 2. What element makes sense to listen for that event?
    // 3. What do I need to do when that event fires?

    // CONTROLLER FOR: I can view the list...
    // 1. What event should I be listening for?
    // 2. What element makes sense to listen for that event?
    // 3. What do I need to do when that event fires?
