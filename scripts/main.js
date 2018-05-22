alert('You wake up on time. You decide to make some coffee');

var userCoffee = prompt(
	'You have to decide which type of coffee you want. What do you make? Cappuccino? or Black Coffee?'
);

var randomNumber = Math.round(Math.random());

alert('You drink your' + ' ' + userCoffee);

if (randomNumber === 0) {
	alert('You drank' + ' ' + userCoffee + '. yay!');
} else if (randomNumber === 1) {
	alert('You drank' + ' ' + userCoffee + '. yay!');
}
