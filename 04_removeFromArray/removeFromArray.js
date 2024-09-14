const removeFromArray = function(base, ...toRemove) {
    let product = []

    for (const baseNum of base) {
        let isValid = true;
        for (const toRemoveNum of toRemove) {
            if (baseNum === toRemoveNum) {
                isValid = false;
            }
        }

        if (isValid == true) {
            product.push(baseNum);
        }
    }

    return product;
};

// Do not edit below this line
module.exports = removeFromArray;
