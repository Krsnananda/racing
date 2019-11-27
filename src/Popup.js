import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import './Popup.css';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      value: ''
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  render() {
    return (
      <div className='popup'>  
        {this.state.showPopup ?  
          <Popup text="Testando"
          closePopup={this.togglePopup.bind(this)}
          />
          : null  
        }  
        <form onSubmit={this.props.closePopup} className='popup_inner'>    
          <h1>{this.props.text}</h1> 
          <input type="text" value={this.state.value} onChange={this.handleChange} 
            placeholder="Insira seu nome aqui" className="txtb" id="name">
          </input>
          <button className="signup-btn">testando botão :)</button>
        </form>  
      </div>  
    );
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

// onClick={this.handleSubmit }

 {/* <form onSubmit={this.handleSubmit}>
       <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
      </form> */}