(function (window) {
	'use strict';
debugger;
	// Your starting point. Enjoy the ride! for commit

	var element = document.querySelector('li');

		'use strict';


		_.forEach(element, function(element, index, elements){
		    element.addEventListener('click', function(){
		        element.childElement.classList.toggle('checkbox');
		    });
			});

})(window);
