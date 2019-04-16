// My constants
const toDoElement = document.getElementById('todo');

// On element blur, do this...
toDoElement.addEventListener("blur", function() {
	// Save element value to Chrome storage
	chrome.storage.sync.set({todo: toDoElement.value}, function() {
		console.log('todo is set to ' + toDoElement.value);
	});
});

// On page load, do this...
window.addEventListener('load', function() {
	// Set textarea value based on Chrome storage value
	chrome.storage.sync.get(['todo'], function(result) {
		toDoElement.value = result['todo'];
		console.log('todo currently is ', result['todo']);
	});
});
