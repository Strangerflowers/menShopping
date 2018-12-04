import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Mheader from '../components/Wheader.jsx';
import Homecontent from './Homecontent.jsx';

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
			</div>
		);
	}
}

export default Index;