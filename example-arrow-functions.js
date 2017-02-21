var names = ['Aman', 'Andrew', 'Test'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });

//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// var returnMe = (name) =>  name + '!';
//
// console.log(returnMe('Test'));



// var person = {
//   name: 'Aman',
//   greet: function () {
//     var that = this;
//     names.forEach(function(name) {
//       console.log(that.name + ' says hi to' + name);
//     });
//   },
//
//   greetArrow: function () {
//      names.forEach((name) => console.log(this.name + ' says hi to' + name))
//   }
// }
//
// person.greetArrow();


var addStatement = (a, b) =>  { return  a + b };

console.log(addStatement(1, 10));

var addExpression = (a, b) =>   a + b ;
console.log(addStatement(1, 12));
