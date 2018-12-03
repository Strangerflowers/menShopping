import React,{Component} from 'react';
// import {Route} from 'react-router-dom';
import Mheader from '../components/Wheader.jsx';


class Index extends Component{
	constructor(props){
		super(props);
		this.props=props;
	}
	render(){
		return (
			<div>
				<Mheader/>
			</div>
		);
	}
}

export default Index;