import React, {Component} from "react";
import SearchBar from "../containers/searchBar";
import WeatherList from "../containers/weatherList";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render(){
    return(
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}