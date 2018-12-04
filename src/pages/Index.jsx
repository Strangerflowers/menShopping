import React,{Component} from 'react';
// import {Route} from 'react-router-dom';
import Mheader from '../components/Wheader.jsx';
import Footer from '../components/Footer.jsx';
import Homecontent from './Homecontent.jsx';
import { Route , withRouter , Link , Router} from "react-router-dom"
import Detail from './Details/details.jsx';


class Index extends Component{
	constructor(props){
		super(props);
		this.props=props;
	}
	render(){
		return (
			<div>
				<Mheader/>
				<Homecontent />
				<Route path = '/Detail/' component = {Detail} />
				<Footer/>
			</div>
		);
	}
}

export default Index;