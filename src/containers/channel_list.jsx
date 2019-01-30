import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ChannelList extends Component {
  // un moyen de sortir le truc super compliqué du map ailleurs

  handleClick = (channel) => {
    // call action
  }


  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        onClick={() => this.handleClick(channel)}
        role="presentation"
      >
      #{channel}
      </li>
    );
  }


  renderList() {
    return (
      <div className="channels-container">
        <ul>
          {this.props.channels.maps(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

