// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { channelsReducer } from "./reducers/channels_list_reducer";
import { messagesReducer } from "./reducers/messages_list_reducer";

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

const identityReducer = (state = null) => state;

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  SelectedChannel: channelsReducer
});

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
