import React, {Component} from 'react';
import Countdown from "./Countdown";
import Popup from "./Popup";
import './App.css';
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <div className="App" id="root">
      {/* <div id="content"></div> */}
        <h1>Corrida de Fusca</h1>
        <div className="Timers">
        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
          <Popup  />
          <Countdown />
          {/* <Form /> */}
          <br/>
        </div>
      </div>
    );
  }
}

export default App;
