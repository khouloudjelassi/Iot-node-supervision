import React from "react";
import gmailApi from "react-api";
 
class SomeComponent extends React.Component {
  state = {
    messages: []
  };
 
  getMessages = () => {
    gmailApi.getThreadsList().then(res => {
      this.setState({ messages: res.result.threads });
    });
  };
 
  render() {
    const { messages } = this.state;
    return (
      <div>
        <button onCLick={this.getMessages}>Get Snippets from messages</button>
        <ul>
          {messages.map(message => (
            <li key="message.id">{message.snippet}</li>
          ))}
        </ul>
      </div>
    );
  }
}