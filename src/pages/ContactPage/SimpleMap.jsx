import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 75.8577,
      lng: 22.7196
    },
    zoom: 11
  };
 

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '600px', width: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAWy2qzoFPzXKk0JhtEfsxhWZoJ24OdyTI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={75.8577}
            lng={22.7196}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;