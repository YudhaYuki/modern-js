let name = ' Yudha Yuki ';

// length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());


// Convert to lower case
console.log(name.toLowerCase());


// Include method
let password = 'abc123pass098';
console.log(password.includes('password'));


// Trim
console.log(name.trim());






// CHALLENGE AREA

// isValidPassword
// length is more than 8 - and it does not contain the word password

function isValidPassword(password) {
    var passLength = password.length;
    var passcontainWord = password.includes('password');
    
    // if (passLength > 8 && !passcontainWord) {
    //     return true
    // } else {
    //     return false;
    // }

    return passLength > 8 && !passcontainWord;
}


console.log(isValidPassword('asdfp'));
console.log(isValidPassword('asdfpfadedded'));
console.log(isValidPassword('asdfpfe13f4password'));
