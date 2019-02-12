import React,{Component} from 'react';
import Footer from '../../components/Footer.jsx';
import "../../styles/cart.less";
var querystring = require('querystring');
// axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));

class Cart extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.state={
			list:[],
			allcheck:false
		}
		
	}
	subNum(index){
		var goodslist=this.state.list;
		if(goodslist[index].stock>1){
			goodslist[index].stock=goodslist[index].stock-1
			var id=this.state.list[index]._id;
			var name=this.state.list[index].name;
			var	type=this.state.list[index].type;
			var	desc=this.state.list[index].desc;
			var	price=this.state.list[index].price;
			var	imgpath=this.state.list[index].imgpath;
			var	stock=goodslist[index].stock;
			React.axios.post('/api/goods/updateGoods',querystring.stringify({
				id:id,
				name:name,
				type:type,
				desc:desc,
				price:price,
				imgpath:imgpath,
				stock:stock
			}))
			.then((res)=>{
				console.log(res);
				// this.getData();
				this.setState({
					list:res.data.data
				})
				console.log(this.state.list)
			})
			.catch((error)=>{
				console.log(error)
			})

		}else{
			return ;
		}

		
	
	}
	addNum(index){


		var goodslist=this.state.list;
		goodslist[index].stock=goodslist[index].stock+1
		console.log(this.state.list);
		var id=this.state.list[index]._id;
		var name=this.state.list[index].name;
		var	type=this.state.list[index].type;
		var	desc=this.state.list[index].desc;
		var	price=this.state.list[index].price;
		var	imgpath=this.state.list[index].imgpath;
		var	stock=goodslist[index].stock;
		// console.log(id,name,type,desc,price,imgpath,stock);
		React.axios.post('/api/goods/updateGoods',querystring.stringify({
			id:id,
			name:name,
			type:type,
			desc:desc,
			price:price,
			imgpath:imgpath,
			stock:stock
		}))
		.then((res)=>{
			console.log(res);
			this.setState({
				list:res.data.data
			})
			console.log(this.state.list)
		})
		.catch((error)=>{
			console.log(error)
		})

	}
	// 点击全选勾选全部
	chooseAll(){
		// let all=document.querySelector(".all");
		// var checks=document.querySelector('.check');
		console.log(this.state.allcheck)
		if(this.state.allcheck){
			this.setState({
				 allcheck : false
			})
		}else{
			this.setState({
				 allcheck : true
			})
		}
	}
	// 点击单个
	singlecheck(index){
		if(this.state.allcheck){
			this.setState({
				 allcheck : false
			})
		}else{
			this.setState({
				 allcheck : true
			})
		}
	}
	getData(){
		React.axios.post('/api/goods/getGoods')
		.then((res)=>{
			console.log(res);
			this.setState({
				list:res.data.data.goodslist
			})
		})
		.catch((error)=>{
			console.log(error)
		})
	}
	componentDidMount() {
	    this.getData();
	  }
	    
	  // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
	  // componentWillUpdata(nextProps, nextState)
	  componentWillUpdata(){
	  	// this.getData();
	  }
	  // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
	  componentDidUpdate(){

	  }

	render(){
		return (
				<div className='cart'>
					<div className="header-wrap">
					    <div className="header-l"> 
					    	<a href="javascript:history.go(-1)"> 
					    		<i className="iconfont icon-jiantou2">  </i> 
					    	</a> 
					    </div>
					    <div className="header-title">
					      	<h1>购物车</h1>
					    </div>
					    <div className="header-r">
					     <a id="header-nav" href="javascript:void(0);">
					     	<i className="more"> . . .</i>

					     	</a>
					    </div>
					</div>
					<div className="cart_goods">
						<div className="store">
							<input type="checkbox" id="checkbox" checked={this.state.allcheck} name="" />
							<i className="iconfont icon-dianpu"></i>	
							<h3>潮男搭配师</h3>
						</div>
						<div className="cart_list">
							<ul>
							{
								(()=>{
									return this.state.list.map((item,index)=>{
										return (
											<li key={index}>
												<input type="checkbox" className="check" onClick={this.singlecheck.bind(this,index)} checked={this.state.allcheck} name=""/>
												<div className="cart_img">
													<img src={item.imgpath} />
												</div>
												<div className="good_list">
													<div className="cart_title">
														<div className="name"><p>{item.name}</p> <span> <i className="iconfont icon-shanchu" ></i></span></div>
													</div>
													<div className="price_qty">
														<span className="price">
															￥ {item.price}
														</span>
														<span className="qty">
															<input type="button" value="-" className="sub" onClick={this.subNum.bind(this,index)} name=""/>
															<input type="text" className='txt' value={item.stock} name=""/>
															<input type="button" value="+" className="add" onClick={
																this.addNum.bind(this,index)
															} name=""/>
														</span>
													</div>
												</div>
											</li>
											)
										
									})
								})()
							}
								
							</ul>
						</div>
						<Footer />

					</div>
					<div className="Settlement">
						<div className="allcheck">
							<input type="checkbox" className="all" onClick={this.chooseAll.bind(this)} name="checkbox" />全选
						</div>
						<div className="total_prite">
							<div className="price_l">合计：	<span className="heji"> ￥</span></div>
							<div className="price_r">结算： <span className="jiesuan">(123)</span></div>
						</div>
					</div>
				</div>
				);

		}
}

export default Cart; 