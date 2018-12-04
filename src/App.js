import React, { Component } from 'react';

import { Route} from "react-router-dom";
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx'; 
import Cart from './pages/Cart/cart.jsx';
import Classify from './pages/classify/classify.jsx';
import News from './pages/news/news.jsx';
import User from './pages/user/user.jsx';
import Detail from './pages/Details/details.jsx';


class App extends Component { 
 
  render() {
    return (

      	<div className="App">
      		{/*<Redirect exact from='/' to='/home/'/>*/}
          	<Route path="/home" exact component={Index} />
        	<Route path="/cart/" component={Cart} />
          	<Route path="/classify/" component={Classify} />
          	<Route path="/news/" component={News} />
          	<Route path="/my/" component={User} />
			<Route path = '/details/:id' component = {Detail} />

          <Footer/>
      </div>
    );
  }
}

export default App;
