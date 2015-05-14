(function (window) {
	'use strict'; // For bonus points what does this do?
debugger;



	//  CONTROLLER FOR: I can ada a task to my list...
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
		newTodoInput.addEventListener('keyup', function addTodoController(){
				if (event.keyCode === 13){// AND presses the "ENTER" key
					console.log('sanity check')
					// THEN:
					// TODO  Save the thing to remember (task) to the list of things to remember(taskList)
					// TODO  Remove the things to remember(task) from the "what needs to be done?"box(input new todo)
					// TODO  Update the number of tasks in the footer...
					// TODO  Add a new task(ul.todo-list > li) to the list of tasks in the display (ul.todo-list)
				}



	}); // END addEventListner (addTodoController)

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

})(window);//
