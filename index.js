let newR;
let def = document.getElementById('r').defaultValue;
newR = document.getElementById("numberRange").innerHTML = def;


function generatePassword() {
    const digitCase = document.querySelector('#dig').checked;
    const upCase = document.querySelector('#up').checked;
    const lowCase = document.querySelector('#low').checked;
    const symbolCase = document.querySelector('#symb').checked;

    let gPass = document.getElementById("gpassword").innerHTML = getChars(newR, upCase, lowCase, digitCase, symbolCase);
    return gPass;
}

function getChars(length, isUpper, isLower, isDigit, isSymbol) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "?_-@!~:.,{}[]^&%$#()*/\"'";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = '';
    let randString = '';

    if (length) {
        if (isDigit)
            randString += numbers;

        if (isLower)
            randString += lower;

        if (isSymbol)
            randString += symbols;

        if (isUpper)
            randString += upper;
    }

    if (randString !== '') {
        for (let i = 0; i < length; i++) {
            password = password + randString.charAt(Math.floor(Math.random() * Math.floor((randString.length) - 1)));
        } 
    }

    else {
        alert('Kindly select a password choice');   
    }

    return password;
}

function getRange() {
    let range = document.getElementById('r').value;

    console.log(range);
    newR = document.getElementById("numberRange").innerHTML = range;

}

document.querySelector("#gpassword").addEventListener("click", pick);


function pick() {
    /* Get the text field */
    var copyText = document.querySelector("#gpassword").innerHTML;
      
    document.execCommand("copy");
  
    alert("Copied the text: " + copyText);
  }