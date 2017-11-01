import React, {Component} from 'react';

class ChatBar extends Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={ this.props.currentUser.name }  onInput={ this.onContent } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp = {this.props.onNewMessage} />
      </footer>
    );
  }
}
export default ChatBar;
