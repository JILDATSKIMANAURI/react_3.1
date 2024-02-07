import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name : "" ,
    }
  }
  setValue(){
    this.setState(
      {
        name : "Jilda"
      }
    );
    window.alert(this.state.name);
  }
  
  render(){
    return(
     <React.Fragment>
        <button tipe="button" onClick={() => this.setValue()}>daakliket</button> 
     </React.Fragment>
    );
  }
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);