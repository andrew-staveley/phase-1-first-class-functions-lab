const driversList = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    let firstTwoDrivers = [drivers[0], drivers[1]];
    return firstTwoDrivers
}

function returnLastTwoDrivers(drivers) {
    let lastTwoDrivers = [drivers[2], drivers[3]];
    return lastTwoDrivers;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    function fareDoubler(fare) {
        let fareDoubler = fare * multiplier;
        return fareDoubler;
    }
    return fareDoubler;
}

function fareDoubler(fare) {
    let doubledFare = fare * 2;
    return doubledFare;
}

function fareTripler(fare) {
    let tripledFare = fare * 3;
    return tripledFare;
}

function selectDifferentDrivers(drivers, functionType, ) {
    return functionType(drivers);
}
