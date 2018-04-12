import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  handleInputChange = event => {
    // console.log(event.target.value)
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "2%" }}>
            <form className="input-group" onSubmit={this.onFormSubmit}>
              <input
                placeholder="Get a five day weather forcast as per your city!!"
                className="form-control"
                value={this.state.term}
                onChange={this.handleInputChange}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">
                  SUBMIT
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
