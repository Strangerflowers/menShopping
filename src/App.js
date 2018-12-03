import React, { Component } from 'react';
// import { Route} from "react-router-dom";

// import Index from './pages/Index.jsx'; 
import Homecontent from './pages/Homecontent.jsx';
// import Detail from './pages/detail.jsx';
// import './styles/App.css';

class App extends Component { 
 
  render() {
    return (
      <div className="App">
        {/* <Redirect exact from='/' to='/home/hot/'/>   <Index />  */}
      		<Homecontent />
           
          
      </div>
    );
  }
}

export default App;
