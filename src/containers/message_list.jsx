import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Message } from '../components/message';


class MessageList extends Component {
  renderList() {
    return this.props.messages.maps((message) => {
      return (
        <Message key={message.id} message={message} />
      );
    });
  }
}
