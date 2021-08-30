import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";

class App extends Component {
  state = {
    username: "SuperMax",
  };
  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <form className="form-horizontal" action="/action_page.php">
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">
              Password:
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
