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

const printFlyOverTimes = function(flyOverTimes) {
  for (const pass of flyOverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printFlyOverTimes(flyOverTimes);
});