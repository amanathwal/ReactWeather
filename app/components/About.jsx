var React = require('react');

// var About = React.createClass({
//   render: function() {
  //     return (
  //       <h1>About</h1>
  //     );
//   }
// });

var About = (props) => {
  return (
       <div>
         <h1 className="text-center page-title">About</h1>
         <p>This is a weather application built on react. Practicing React.</p>
       </div>
     );
};

module.exports = About;
