function swapCase(inputString) {
    let swappedString = '';
    for (let char of inputString) {
        if (char >= 'a' && char <= 'z') {
            swappedString += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char;
        }
    }
    return swappedString;
}


const inputStr = 'The Quick Brown Fox';
const outputStr = swapCase(inputStr);
console.log(outputStr); ``