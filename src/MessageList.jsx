import React, {Component} from 'react';
import Message from './Message.jsx';

class MessagesList extends Component {
  render() {
    return (
      <main className="messages">
        <Message />
        <Message />
        <Message />
      </main>
    );
  }
}
export default MessagesList;
