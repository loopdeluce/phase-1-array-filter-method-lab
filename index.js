// Code your solution here

function findMatching (drivers, driverSearch){
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === driverSearch.toLowerCase()
    });
};

function fuzzyMatch (drivers, driverBeginning) {
    return drivers.filter(function(driver){
        return driver.substring(0, driverBeginning.length) === driverBeginning
    });
};

function matchName (drivers, driverName) {
    return drivers.filter(function(driver){
        return driver.name === driverName;
    });
};