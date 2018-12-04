import React,{Component} from 'react';
import classifyLess from '../../styles/classify.less';
import Mheader from '../../components/Wheader.jsx';

class Classify extends Component{
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			cards:[]

		}
	}
	getData(){
		React.axios.get('https://www.nanshig.com/mobile/index.php?act=goods_class')
		.then((res)=>{
			console.log(res);
			console.log(res.data.datas.class_list);
			this.setState({
				cards:res.data.datas.class_list
			});
			console.log(this.state.cards);
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	componentDidMount(){
		this.getData();
	}
	render(){
		return (
				<div className='classify'>
					<Mheader/>
					<div className="classify_header" id="categroy-cnt">
					   <ul className="categroy-list" > 
					  	 {
					  		(()=>{
					  			return this.state.cards.map((item,index)=>{
					  				return (
										<li key={index} className="category-item selected" > 
										    <a href="../pages/index.jsx" className="category-item-a category"> 
										        <div className="ci-fcategory-ico"> </div> 
										        <div className="ci-fcategory-name">
										          {item.gc_name}
										        </div>
										    </a>
									    </li> 
					  					)
					  			})
					  		})()
					  	}
					   </ul>
				  	</div>

				  <div className="categroy" id="categroy">
				    <dl className="categroy-child-list"> 
				      <dt>
				       <a href="https://www.nanshig.com/wap/tmpl/product_list.html?gc_id=258">
				        <i className="col"></i>时尚上装<i className="arrow-r">></i>
				       </a>
				      </dt> 
				      <dd> 
				       <a href="https://www.nanshig.com/wap/tmpl/product_list.html?gc_id=264"> 
				          <img src="https://www.nanshig.com/data/upload/other/goods_className/2/05421559201080766_max.jpg" /> 
				          <p>T恤</p> 
				        </a> 
				      </dd> 
				   </dl> 
				   <dl className="categroy-child-list"> 
				   </dl>
				  </div>

				</div>
			);
	}
}

export default Classify