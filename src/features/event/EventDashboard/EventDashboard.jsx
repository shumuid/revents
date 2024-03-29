import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
import EventList from "../EventList/EventList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";

const mapStateToProps = state => ({
  events: state.events,
  loading: state.async.loading
});

//mapDispatchToProps official name
const mapActionsToProps = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(EventDashboard);
