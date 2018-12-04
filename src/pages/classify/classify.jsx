import React,{Component} from 'react';
import classifyLess from '../../styles/classify.less';
import Mheader from '../../components/Wheader.jsx';
import { Link } from "react-router-dom";

class Classify extends Component{
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			cards:[],
			class_list:[],
			goods_list:[]
		}
	}
	getData(){
		React.axios.get('https://www.nanshig.com/mobile/index.php?act=goods_class')
		.then((res)=>{
			console.log(res);
			// console.log(res.data.datas.class_list);
			this.setState({
				cards:res.data.datas.class_list
			});
			// console.log(this.state.cards);
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	getClassData(){
		// https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=256
		React.axios.get('https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=256')
		.then((res)=>{
			console.log(res);
			this.setState({
				class_list:res.data.datas.class_list[0].child
			})
			console.log(this.state.class_list)
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	// https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=256&page=20
	getGoodData(){
		React.axios.get('https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=256&page=20')
		.then((res)=>{
			console.log(res);
			this.setState({
				goods_list:res.data.datas.goods_list
			})
			console.log(this.state.goods_list)
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	componentDidMount(){
		this.getData();
		this.getClassData();
		this.getGoodData();
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
										    <Link  to="/cart/" className="category-item-a category"> 
										        <div className="ci-fcategory-ico"> </div> 
										        <div className="ci-fcategory-name">
										          {item.gc_name}
										        </div>
										    </Link>
									    </li> 
					  					)
					  			})
					  		})()
					  	}
					   </ul>
				  	</div>

				  	<div className="categroy" id="categroy">
					   <dl className="categroy-child-list"> 
	    					<dt className="categroy_title">
						       <a href="#">
						        	<i className="col"></i>时尚上装<i className="arrow-r"> > </i>
						       </a>
						    </dt> 
							    {
							    	(()=>{

							    		return this.state.class_list.map((item,idx)=>{
							    			// console.log(item)
							    			return (
							    				
												    <dd> 
												       	<a href="#"> 
												          <img src={item.gc_image} alt="" /> 
												          <p>{item.gc_name}</p> 
												        </a> 
												    </dd>
												 
							    				)
							    		})
							    	})()
							    }
					      </dl> 
					   	<dl className="categroy-child-list"> 
					   	</dl>
				  	</div>

				  	<div id="product_list">
				        <p className="goods_recommend">商品推荐</p>
				        <div className="goods_list">
				          <ul>
				          {
				          	(()=>{
				          		return this.state.goods_list.map((item,index)=>{
				          			return (
			          					<li key={index}>
							              <div className="good_img"><img src={item.goods_image_url}  alt=""/></div>
							              <div className="good_tip">
							                <p className="good_title">
							                  {item.goods_name}
							                </p>
							                <p className="good_price">
							                  <span> ￥</span><span>{item.goods_price}</span>
							                </p>
							              </div>
							            </li>
			          				)
				          		})

				          	})()
				          }
				        
				         
				          </ul>
				        </div>
				    </div>

				</div>
			);
	}
}

export default Classify