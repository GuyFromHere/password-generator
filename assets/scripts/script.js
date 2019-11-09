var criteriaArr = ['numbers', 'special characters', 'lower case', 'upper case'];

function getLength() {
	let pwLength = prompt(
		'How long should it be? Enter a number between 8 and 128.'
	);
	pwLength = parseInt(pwLength);
	if (pwLength >= 8 && pwLength <= 128) {
		return pwLength;
	} else {
		alert('You must specify a number between 8 and 128. Try again!');
		return getLength();
	}
}

function getCriteria(type) {
	var criteria = prompt('Use ' + type + '? Y or N');
	criteria = criteria.toLowerCase();
	if (criteria === 'y') return true;
	else return false;
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (+max - +min)) + +min;
}

function generatePassword() {
	var criteria = '';
	var password = '';
	var chars = [
		'0123456789',
		'!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~',
		'abcdefghijklmnopqrstuvwxyz',
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	];

	let pwLength = getLength();

	for (var i = 0; i < criteriaArr.length; i++) {
		if (getCriteria(criteriaArr[i])) {
			criteria += chars[i];
		}
		// prettier-ignore
		if (i === 3 && criteria.length === 0) {
			alert('You must select at least one character type. Try again!');
			i = -1;
		}
	}

	// Use random number generator to pick elements from criteria and add them to the new password
	for (var x = 0; x < pwLength; x++) {
		password += criteria[getRandom(0, criteria.length)];
	}
	document.getElementById('passwordText').innerHTML = password;
}

function clipPassword() {
	var password = document.getElementById('passwordText');
	password.select();
	password.setSelectionRange(0, 99999);
	document.execCommand('copy');
}
