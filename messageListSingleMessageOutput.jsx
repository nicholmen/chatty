import React, {Component} from 'react';
import Message from './Message.jsx';

class MessagesList extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    return (
      <main className="messages">
        <Message message={ this.props.messages[0] } />
       
      </main>
    );
  }
}
export default MessagesList;
