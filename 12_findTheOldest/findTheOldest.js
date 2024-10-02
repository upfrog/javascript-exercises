const findTheOldest = function(people) {

    oldest = people[0];
    oldestAge = calcAge(people[0]);

    for (let i = 1; i < people.length; i++) {
        
        personAge = calcAge(people[i]);

        if (personAge > oldestAge) {
            oldest = people[i];
            oldestAge = personAge;
        }
    }

    return oldest;
    
};


function calcAge(person) {
    let yod = person.yearOfDeath;

    if (yod == undefined) {
        yod = new Date().getFullYear();
    }

    return yod - person.yearOfBirth;
}

main();
function main() {
    findTheOldest("F");
}

// Do not edit below this line
module.exports = findTheOldest;
