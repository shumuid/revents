import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapStateToProps = state => ({
  data: state.test.data
});

//mapDispatchToProps official name
const mapActionsToProps = {
  incrementCounter,
  decrementCounter,
  openModal
};

class TestComponent extends Component {
  state = {
    latlong: {
      lat: 44.4267674,
      lng: 26.1025384
    }
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        this.setState({
          latlong: latLng
        })
      )
      .catch(error => console.error("Error", error));
  };

  render() {
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <div>
        <h1>
          Test Component {console.log("reactkey:", process.env.REACT_APP_KEY)}
        </h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content='Increment' />
        <Button onClick={decrementCounter} negative content='Decrement' />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color='teal'
          content='Open Modal'
        />
        <TestPlaceInput selectAddress={this.handleSelect} />
        <SimpleMap key={this.state.latlong.lng} latlong={this.state.latlong} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TestComponent);
