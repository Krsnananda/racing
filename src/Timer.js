import './Timer.css';

class Timer extends React.Component {
    render() {
       return (
        <div>
         <h1 class="timer"> </h1>
        </div>
      );
    }
  }

 class StartButton extends React.Component {
    render() {
      return(
       <div class="start-button">
        <button>Start</button>
      </div>
       );
   }
 }