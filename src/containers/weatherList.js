import React, {Component} from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import Map from "../components/google_map";
import "../style.css";

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const humdty = cityData.list.map((weather) => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;
    // console.log(temps)

    return (
      <tr key={name}>
        <td><Map lon={lon} lat={lat}/></td>
        <td>
          <Chart data={temps} color="orange" units="K"/>
        </td>
        <td>
          <Chart data={pressure} color="green" units="hPa"/>
        </td>
        <td>
          <Chart data={humdty} color="brown" units="%"/>
        </td>
      </tr>
    );
    
  }

  render(){
    return(
      <div className="container" style={{marginTop:'2%'}}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature(K)</th>
              <th>Pressure(hPa)</th>
              <th>Humidity(%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);