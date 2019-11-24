import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00'
    }
  }

render() {
  return (
    <div className="App">
      <form class="" action="index.html" method="post">
        <h1>Corrida de Fusca</h1>
        <input type="text" placeholder="Insira seu nome aqui" class="txtb"></input>
        <input type="submit" value="Começar corrida" class="signup-btn"></input>
        {/* <header className="App-header"> */}
      {/* </header> */}
    </form>
  </div>
    );
  };
}
export default App;
