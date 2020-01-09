import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App(props) {
  return (
    <div className="App">
        <h1>Hello, {props.name}</h1>
    </div>
  );
}
*/

class App extends Component {

  constructor(props) {
      super(props);
      
      this.state = {
          text: "Hi",
          value: "",
          hasLoaded: false
      };
  }

  handleInput(value) {
      this.setState({ value });
  }

  handleClick(hasLoaded) {
      if (hasLoaded) {
          this.setState({ hasLoaded: false });
      } else {
          this.setState({ hasLoaded: true });
      }
  }

  componentDidMount() {
      this.setState({ hasLoaded: true});
  }

  render() {
      if (this.state.hasLoaded) {
          return (
              <React.Fragment>
                  <input
                      placeholder={ this.state.text }
                      onChange={(event) => this.handleInput(event.target.value)}
                  />
                  <br />
                  <br />
                  <button
                      onClick={(event) => this.handleClick(this.state.hasLoaded)}
                  >Click Me</button>
                  <h1>{this.props.value}
                  <br />
                  {this.state.text}</h1>
              </React.Fragment>
          );
      } else {
          return (
              <React.Fragment>
                  <button
                      onClick={(event) => this.handleClick(this.state.hasLoaded)}
                  >Click Me</button>
                  {console.log(this.state.hasLoaded)}
              </React.Fragment>
          );
      }
  }
}



export default App;
