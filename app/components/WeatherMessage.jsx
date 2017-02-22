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
      <h3 className="text-center">it is {temp} in {location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
