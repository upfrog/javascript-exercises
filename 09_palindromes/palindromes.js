const palindromes = function (input) {
    const punctuation = [" ", ",", "-", ";", ":", "`", "\"", "\'", "_", ".", "!"]
    
    let inputArray = input.split("");

    //This would be nicer as a series of checks against unicode values
    inputArray = inputArray.filter((elem) => {
        if (punctuation.includes(elem)) {
            return false;
        }
        else {
            return true;
        }
    })

    inputArray = inputArray.map((elem) => {
        return elem.toLowerCase();
    })

    let reversedArray = structuredClone(inputArray);
    reversedArray.reverse();

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] != reversedArray[i]) {
            return false
        }
    }
    return true;
};


function main() {
    console.log("yo")
    console.log(palindromes("ZZZZ car, a man, a maracaz!"));
}

main();


// Do not edit below this line
module.exports = palindromes;
