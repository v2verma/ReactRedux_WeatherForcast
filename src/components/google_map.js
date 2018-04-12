import React, { Component } from "react";
// const MY_API_KEY = "AIzaSyAnvupITlQ1S3OswQ8XqkffUusf0rwGHEY" // true
import { withGoogleMap,Marker, GoogleMap } from "react-google-maps";

class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.props.lat, lng: this.props.lon }}
        defaultZoom={13}
      >{<Marker position={{ lat: this.props.lat, lng: this.props.lon }} />}
      </GoogleMap>
    ));
    return (
      <div >
        <GoogleMapExample
          containerElement={<div style={{ height: "150px", width: "180px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Map;
