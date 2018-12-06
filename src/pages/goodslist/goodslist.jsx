import React from 'react';
import Mheader from "../../components/Wheader.jsx";
import GoodsListLess from "../../styles/goodslist.less";

class GoodsList extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		this.props=props;
		this.state={
			list:[],
			bool:false,
			sale:false
		};
	}
	
	show(){
		var show=this.state.bool
		var isSale=this.state.sale
		this.setState({
			bool:!show,
			sale:!isSale
		})
		// console.log(this.state.bool);
	}
	sale(){
		// https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=264&page=10&curpage=1&gc_id=264&key=1&order=2
		this.show();
		var isShow=this.state.sale;
		var classId=this.props.match.params.id;
		var order =2
		React.axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=${classId}&page=10&curpage=1&gc_id=${classId}&key=1&order=${order}`)
		.then((res)=>{
			console.log(res)
			this.setState({
				list:res.data.datas.goods_list
			})
		})
		.then((error)=>{
			console.log(error)
		})

	}
	order(){
		this.show();
		var isShow=this.state.bool;
		var classId=this.props.match.params.id;
		var order
		if(isShow){
			order=1
		}else if(!isShow){
			order=2
		}
		React.axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=${classId}&page=10&curpage=1&gc_id=${classId}&key=3&order=${order}`)
		.then((res)=>{
			console.log(res)
			this.setState({
				list:res.data.datas.goods_list
			})
		})
		.then((error)=>{
			console.log(error)
		})
			
		console.log(isShow);
	}
	getData(){
		var classId=this.props.match.params.id;
		console.log(classId);
		React.axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=${classId}&page=10&curpage=1&gc_id=${classId}`)
		.then((res)=>{
			console.log(res)
			this.setState({
				list:res.data.datas.goods_list
			})
		})
		.then((error)=>{
			console.log(error)
		})
	}
	 componentDidMount() {
	    this.getData();
	   
	  }
	render(){
		return (
			<div className='goodslist'>
				<Mheader />
				<div className="goods-search-list-nav"> 
				   	<ul id="nav_ul"> 
					    <li>
					    	<a href="javascript:void(0);" className="current" id="sort_default" onClick={()=>{
					    		this.order();
					    	}}>价格排序<i></i>
					    	</a>
					    	{/*<div className="order" style={{display:this.state.bool?"block":'none'}}>
					    		<p>综合排序</p>
					    		<p>价格从高到低</p>
					    		<p>价格从低到高</p>
					    	</div>*/}
					    </li> 
					    <li>
					    	<a href="javascript:void(0);" className="" onClick={()=>{
					    		this.sale();
					    	}} >销量优先
					    	</a>
					    </li> 
					    <li>
					    	<a href="javascript:void(0);" id="search_adv">筛选<i></i></a>
					    </li> 
				   	</ul> 
				   	<div className="browse-mode">
				    	<a href="javascript:void(0);" id="show_style">
				    	<span className="browse-list"></span>
				    	</a>
				   	</div> 
				</div>
				<div className="goods">
					<ul>
					{
						(()=>{
							return this.state.list.map((item,index)=>{
								return (
										<li>
											<div className="list_l">
												<img src={item.goods_image_url} alt=" " />
											</div>
											<div className="list_right">
												<div className="list_title">
													{item.goods_name}	
												</div>
												<div className="list_price">
													{item.goods_price}
												</div>
												<div className="store_name">
													<span className="sale">销量 {item.goods_salenum}</span> <span className="name">{item.store_name}</span>
												</div>
											</div>
										</li>
									)
							})
						})()
					}
						
					</ul>
				</div>
			</div>
			)
	}
}

export default GoodsList