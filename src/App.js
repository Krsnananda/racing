import React, {Component} from 'react';
import Countdown from "./Countdown";
import Popup from "./Popup";
import './App.css';
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showPopup: false
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event){
    event.preventDefault();
    if (this.state.value !== undefined) {
      alert('Seu nome está: ' + this.state.value)
    }
  }

  updateInput(event) {
    const username = event.target.value;
    this.setState ({username})
    console.log(username);
  }
  
  componentDidMount() {
    this.togglePopup();  
  }

  render() {
    return (
      <div className="App">
        <h1>Corrida de Fusca</h1>
          {this.state.showPopup ?  
          <Popup text="Testando"
          closePopup={this.togglePopup.bind(this)}
          />
          : null  
          }  
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.updateInput} placeholder="Insira seu nome aqui" className="txtb" id="name"></input>
          <input type="submit" value="testando botão :)"></input>
        </form>
        <div className="Timers">
          <Countdown />
          <br/>
        </div>
      </div>
    );
  }
}

export default App;
