// const { fetchMyIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// const { fetchCoordsByIP } = require("./iss");

// fetchCoordsByIP('50.100.31.164', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned coordinates:", coordinates);
// });

// const { fetchISSFlyOverTimes } = require("./iss");

// fetchISSFlyOverTimes({ latitude: '90', longitude: '-79.63753' }, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log("It worked! Returned ISS flyover times:", flyOverTimes);
// });

const { nextISSTimesForMyLocation } = require("./iss");
const { printFlyOverTimes } = require("./printFlyOverTimes");

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printFlyOverTimes(flyOverTimes);
});