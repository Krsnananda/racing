import React, {Component} from 'react';
import Countdown from "./Countdown";
import Popup from "./Popup";
import './App.css';
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      showPopup: false
    };
    this.togglePopup = this.togglePopup.bind(this);
    // this.addValue = this.addValue.bind(this);
    // this.updateInput = this.updateInput.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  // addValue(event){
  //   event.preventDefault();
  //   if (this.state.value !== undefined) {
  //     alert('Seu nome está: ' + this.state.value)
  //   }
  // }

  // updateInput(event) {
  //   const username = event.target.value;
  //   this.setState ({username})
  //   console.log(username);
  // }
  
  componentDidMount() {
    this.togglePopup();  
  }

  render() {
    return (
      <div className="App">
        <h1>Corrida de Fusca</h1>
          {/* <button onClick={this.togglePopup.bind(this)}> click to launch</button> */}
          {this.state.showPopup ?  
          <Popup text="Testando"
          closePopup={this.togglePopup.bind(this)}
          />
          : null  
          }  
        {/* <form onSubmit={this.value}>
          <input type="text" onChange={this.updateInput} placeholder="Insira seu nome aqui" className="txtb" id="name"></input>
          <input type="submit" value="testando botão :)"></input>
        </form>
        <div className="Timers">
          <Countdown />
          <br/>
          <Popup />
        </div> */}
      </div>
    );
  }
}

export default App;
