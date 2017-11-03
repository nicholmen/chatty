import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "anonymous"},
      messages: [],
      userCount: 0
    }
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.addEventListener('message', event => {
      const parsedData = JSON.parse(event.data)
      if (parsedData.type === "userCount") {
        // console.log('userCount appjsx', parsedData.value)
        this.setState({ userCount: parsedData.value})
      } else {
      this.setState({
        messages: this.state.messages.concat(parsedData)
        })
      }
    })
  }

  updateUsername = (username) => {
      this.setState({currentUser: {name: username }})
    }

  // onNewMessage(event){
  //   if(event.keyCode===13){
  //     const newMessage = {"type": "postNotification", id: uuidv4(), username: this.state.currentUser.name, content: event.target.value};
  //     this.socket.send(JSON.stringify(newMessage))
  //     // const messages = this.state.messages.concat(newMessage)
  //     // // Update the state of the app component.
  //     // // Calling setState will trigger a call to render() in App and all child components.
  //     // this.setState({messages: messages})
  //     event.target.value = '';
  //   }
  // }

  sendMessage = (message) => {
    this.socket.send(JSON.stringify(message))
  }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="navbar-count">{this.state.userCount} users online</span>
        </nav>
        <MessageList messages={ this.state.messages } />
        <ChatBar currentUser={ this.state.currentUser } updateUsername ={this.updateUsername} sendMessage={ this.sendMessage} />
      </div>
    );
  }
}

export default App;
