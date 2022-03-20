// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length -2, array.length);
}

// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (numInt) => function() {
 return numInt * numInt;
}

const fareD = createFareMultiplier();

const fareDoubler = (fare) => fare*2;

const fareTripler = (fareT) => fareT*3;

const selectDifferentDrivers = (drivers, selectDrivers) => selectDrivers(drivers);
