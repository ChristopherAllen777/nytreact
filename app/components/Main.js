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
            <Link to="/Results"><button className="btn btn-danger btn-lg">Results</button></Link>
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
              <label for="search">Search Term:</label>
              <input type="text" className="form-control" id="search-term"/>
            </div>

            <div className="form-group">
              <label for="pwd">Number of Records to Retrieve:</label>
              <select className="form-control" id="num-records-select">
                <option value="1">1</option>
                <option value="5" selected>5</option>
                <option value="10">10</option>
              </select>
            </div>

            {/* Here we capture the Start Year Parameter */}
              <div className="form-group">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year"/>
              </div>

               {/* Here we capture the End Year Parameter */}
              <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year"/>
              </div>

              <Link to="Results"><button type="submit" className="btn btn-primary" id="run-search"><i className="fa fa-search"></i> Search</button></Link>
              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

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