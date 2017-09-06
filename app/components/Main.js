// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2 style= { { textAlign: 'center' } }><strong>New York Times Article Scrubber</strong></h2>
          <p style= { { textAlign: 'center' } }><em>Search for and annotate articles of interest!</em></p>
          <hr />
          <p>
            <Link to="/Child1"><button className="btn btn-primary btn-lg">Search</button></Link>
            <Link to="/Child2"><button className="btn btn-danger btn-lg">Results</button></Link>
            <Link to="/Saved"><button className="btn btn-warning btn-lg">Saved Articles</button></Link>
          </p>
        </div>

     
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 style={{ textAlign: 'center' }} className="panel-title">Search Articles</h3>
            </div>
            <div className="panel-body">
            <form>
              <div className="form-group">
                <label className="form-control-label" for="formGroupExampleInput">Topic</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
              </div>
              <div className="form-group">
                <label className="form-control-label" for="formGroupExampleInput">Start Year</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
              </div>
              <div className="form-group">
                <label className="form-control-label" for="formGroupExampleInput">End Year</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
              </div>
              <Link to="/Child1"><button type="submit" className="btn btn-primary">Search!</button></Link>
            </form>
            </div>
          </div>
        </div>


        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
