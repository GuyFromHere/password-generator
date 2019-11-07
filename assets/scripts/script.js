var criteriaArr = ["numbers", "special characters", "lower case", "upper case"];

function getCriteria(type) {
  var criteria = prompt("Use " + type + "? Y or N");
  // validation here...
  criteria = criteria.toLowerCase();
  if (criteria === "y") return true;
  else return false;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

function generatePassword(length) {
  var criteria = "";
  var password = "";
  var chars = [
    "0123456789",
    "!@#$%^&*()_+~`|}{[]:;?><,./-=",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  ];

  // Get password criteria based on user input
  for (var i = 0; i < criteriaArr.length; i++) {
    if (getCriteria(criteriaArr[i])) {
      criteria += chars[i];
    }
  }
  // Use random number generator to pick elements from criteria and add them to the new password
  for (var x = 0; x <= length; x++) {
    password += criteria[getRandom(0, criteria.length)];
  }
  document.getElementById("passwordText").innerHTML = password;
}

function clipPassword() {
  var password = document.getElementById("passwordText");
  password.select();
  password.setSelectionRange(0, 99999);

  document.execCommand("copy");
}
