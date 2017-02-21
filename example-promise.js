// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
//
// getTempCallback('Philapdelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philapdelphia').then(function(temp) {
//   console.log('success', temp);
// }, function(err) {
//    console.log('promise err', err);
// });


//challenge
function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
     if (typeof a === 'number' && typeof b === 'number') {
          resolve(a + b);
     }

     reject('Both arguments should be a number');
  });
}

function success(a) {
  console.log(a);
}

function error(msg) {
  console.log(msg);
}

addPromise(7, 20).then(success, error);
addPromise(7, 'sad').then(success, error);
