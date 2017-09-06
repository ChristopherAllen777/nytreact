// Include React
var React = require("react");

var Search = React.createClass({
  render: function() {
    return (
      <div className="container">

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
        
      </div>
    );
  }
});

module.exports = Search;
