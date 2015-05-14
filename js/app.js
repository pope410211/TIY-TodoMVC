(function (window) {
	'use strict';
debugger;
	// Your starting point. Enjoy the ride! for commit
	var elements = document.querySelectorAll('ul');

	_.forEach(elements, function(element, index, elements){
    element.addEventListener('click', function(){
        console.log(elements, index, element);
        element.parentElement.classList.toggle('completed');
    });
});



})(window);
