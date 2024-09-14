const repeatString = function(word, count) {
    if (count < 0) {
        return 'ERROR';
    }
    
    let result = "";

    while (count > 0) {
        result = result.concat(word);
        --count;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
