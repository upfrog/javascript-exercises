const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0    //test non-negativity
        || num1%1 != 0 || num2%1 != 0   //test wholeness
        || typeof num1 != "number" || typeof num2 != "number") //test type
    {
        return "ERROR";
    }

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    
    let result = 0;

    while (start <= end) {
        result += start;
        ++start;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;;
