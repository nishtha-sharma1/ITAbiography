function checkEverything(event) {
	// get the event and prevent the default action
	event.preventDefault();
	//console.log('form submitted');

	// grab all the inputs and transform the NodeList to an Array
	var inputs = Array.from(document.getElementsByTagName('input'));

	// filter the inputs array and remove type = submit
	var fields = inputs.filter(function (input) {
		return input.type !== 'submit';
		}); 
	//for loop to run through the array 
	//had to set up a boolean statement to break the loop so it wouldn't keep going if a value was empty  
	var error = false;
	for (var i = 0; i < fields.length; i++) {
		console.log(fields[i].name);
		if (fields[i].value == "") {
			error = true;
			alert("Please enter your " + fields[i].name);
			break;
		}
	} 
	if(!error){
		alert('You form was submitted. My people will talk to your people.');
		document.getElementById("contact").reset();
		} 
	return false; 
}

var form = document.getElementById('contact');
console.log(form);

form.addEventListener('submit', checkEverything);
