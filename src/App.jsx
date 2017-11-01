import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    /*
       If we add a constructor we need to call
       `super()` to also call the constructor
       of the Component class.
    */
    super(props);

    /* If we need access to props, we use the
       value passed to the constructor instead
       of this.props. Everywhere else in the class
       you use this.props.
    */

    /*
       The state of our component has a single key
       called posts that contains an empty array.
    */
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: '0',
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: '1',
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }
  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={ this.state.messages } />
        <ChatBar currentUser={ this.state.currentUser } />
      </div>
    );
  }
}
export default App;
