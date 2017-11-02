import React, {Component} from 'react';
const uuidv4 = require('uuid/v4');


class ChatBar extends Component {
  constructor (props) {
    super(props);
    this.onNewMessage = this.onNewMessage.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
  }

  onUserNameChange(event){
    const newUsername = event.target.value;
    if(event.keyCode===13){
      const newMessage = {type: "postNotification", id: uuidv4(), content: this.props.currentUser.name + " changed their name to: " + newUsername};
      this.props.sendMessage(newMessage);
      this.props.updateUsername(newUsername)
    }
  }
  
  onNewMessage(event){
    if(event.keyCode===13){
    const newMessage = {type: "postMessage", id: uuidv4(), username: this.props.currentUser.name, content: event.target.value};
    this.props.sendMessage(newMessage)
    }
  }

  render() {
    console.log(this.props)
    console.log('tree signal', this.props.currentUser.name)
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={ this.props.currentUser.name }  onKeyUp = { this.onUserNameChange } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp = {this.onNewMessage} />
      </footer>
    );
  }
}
export default ChatBar;
