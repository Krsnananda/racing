import React, { Component } from 'react';
import './Popup.css';

export default class Popup extends Component {
  render() {
    return (
      <div className='popup'>  
        <div className='popup_inner'>  
          <h1>{this.props.text}</h1>  
          <button onClick={this.props.closePopup}>close me</button>  
        </div>  
      </div>  
    );
  }
}
// state = {playerName: ""}

// export default class Form extends Component {
//   render () {
//     return (
//       <form>
//         <input type="text" value={this.state.playerName} 
//           onChange={event => this.setState({playerName:event.target.value})}
//           placeholder="Insira seu nome aqui" class="txtb" required
//         >
//         </input>
//       </form>
//     );
//   }