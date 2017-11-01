import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    return (

        <div className="message">
          <span className="message-username"> { this.props.username } </span>
          <span className="message-content"> { this.props.content }</span>
        </div>

    );

    // return (
    //   <div className="message system">
    //     Anonymous1 changed their name to nomnom.
    //   </div>
    // );
  }
}
export default Message;
