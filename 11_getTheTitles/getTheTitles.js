const getTheTitles = function(bookArray) {

    let titleArray = bookArray.map((book) => {
        return book.title;
    })

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
