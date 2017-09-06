// Include React
var React = require("react");

var Results = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body" id="well-section">
              I am the Resulting Articles!
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
