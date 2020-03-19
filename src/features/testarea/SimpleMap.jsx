import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const AnyReactComponent = () => <Icon name='marker' size='big' color='red' />;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 6
  };

  render() {
    const { latlong } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "600px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_KEY }}
          defaultCenter={latlong}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={latlong.lat} lng={latlong.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
