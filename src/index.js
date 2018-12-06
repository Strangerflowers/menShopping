import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router} from "react-router-dom";

import axios from 'axios';
import App from './App';

import * as serviceWorker from './libs/serviceWorker';
React.axios = axios;

ReactDOM.render(

		 <Router>
            <App />
        </Router>,

	document.getElementById('root')
)

serviceWorker.unregister();
