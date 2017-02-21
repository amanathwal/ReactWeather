var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h1>Examples</h1>
//     );
//   }
// });


var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples!</h1>
      <p>Here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to='/?location=San Jose'>San Jose, Ca</Link>
        </li>
        <li>
         <Link to='/?location=Amritsar'>Amritsar, India</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
