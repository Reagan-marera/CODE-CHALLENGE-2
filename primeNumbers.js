function Prime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function filterPrimes(array) {
    return array.filter(num => Prime(num));
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeArray = filterPrimes(inputArray);
console.log(primeArray); 
