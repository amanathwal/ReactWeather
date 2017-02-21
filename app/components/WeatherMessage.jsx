var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {location, temp} = this.props;
//
//     return (
//       <div>
//         <p>it is {temp} in {location}</p>
//       </div>
//     );
//   }
// });


var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <h1>it is {temp} in {location}</h1>
    </div>
  );
};

module.exports = WeatherMessage;
