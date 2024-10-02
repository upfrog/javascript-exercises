const palindromes = function (input) {
    const punctuation = [" ", ",", "-", ";", ":", "`", "\"", "\'", "_", ".", "!"]

    let inputArray = input.toLowerCase().split("");
    //This would be more rigorous as a series of checks against unicode values
    inputArray = inputArray.filter((elem) => {
        return !(punctuation.includes(elem));
    })

    for (let i = 0; i < inputArray.length/2; i++) {
        let rear = inputArray.length - 1 - i;
        if (inputArray[i] != inputArray[rear]) {
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
