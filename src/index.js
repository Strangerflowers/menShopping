import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from "react-router-dom";

// import axios from 'axios'; 
// import './styles/index.css';
// import './styles/base.css';
// import './styles/cards.css';
// import './styles/App.css'; 
import axios from 'axios';
import App from './App';

//引入全局配置样式
// import  './style/reset.less';
import * as serviceWorker from './libs/serviceWorker';
React.axios = axios;

ReactDOM.render(

		 <Router>
            <App />
        </Router>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
