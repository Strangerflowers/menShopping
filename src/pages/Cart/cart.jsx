import React,{Component} from 'react';
import Footer from '../../components/Footer.jsx';
import "../../styles/cart.less";
var querystring = require('querystring');
// axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));

class Cart extends Component{
	constructor(){
		super();
		// this.props = props;
		this.state={
			list:[],
			allcheck:false,
			selected:false,
			data:[]
		}
		
	}
	subNum(index){

		var goodslist=this.state.list;

		if(goodslist[index].qty>1){
			goodslist[index].qty=goodslist[index].qty-1
			var _id=this.state.list[index]._id;
			var id=this.state.list[index].id;
			var name=this.state.list[index].name;
			var	user=this.state.list[index].user;
			var	price=this.state.list[index].price;
			var	imgurl=this.state.list[index].imgurl;
			var	qty=goodslist[index].qty;
			var size=goodslist[index].size;
			var color=goodslist[index].color;
			React.axios.post('http://localhost:3000/goods/updateGoods',querystring.stringify({
				_id:_id,
				id:id,
				name:name,
				user:user,
				price:price,
				imgurl:imgurl,
				qty:qty,
				size:size,
				color:color
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
		goodslist[index].qty=goodslist[index].qty+1
			var _id=this.state.list[index]._id;
			var id=this.state.list[index].id;
			var name=this.state.list[index].name;
			var	user=this.state.list[index].user;
			var	price=this.state.list[index].price;
			var	imgurl=this.state.list[index].imgurl;
			var	qty=goodslist[index].qty;
			var size=goodslist[index].size;
			var color=goodslist[index].color;
			React.axios.post('http://localhost:3000/goods/updateGoods',querystring.stringify({
				_id:_id,
				id:id,
				name:name,
				user:user,
				price:price,
				imgurl:imgurl,
				qty:qty,
				size:size,
				color:color
			}))
			.then((res)=>{
				// console.log(res);
				// this.getData();
				this.setState({
					list:res.data.data
				})
			})
			.catch((error)=>{
				console.log(error)
			})
	}
	// 点击全选勾选全部
	chooseAll(){
		// let all=document.querySelector(".all");
		// var checks=document.querySelector('.check');
		// console.log(this.state.allcheck)
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
	singlecheck(idx,e){

		let i=this.state.data.indexOf(idx);
			// 如果i>0，也就是说该商品原本就在数组中，所以当再次点击的时候要将改商品从数组中移除
			if(i>=0){
				this.state.data.splice(i,1);
				// this.total-=this.list[idx].qty*this.list[idx].price;
			}else{
				this.state.data.push(idx);
				// this.total+=this.list[idx].qty*this.list[idx].price;
			}
			console.log(this.state.data.length)
		console.log(this.state.data.length==this.state.list.length)
		console.log(this.state.list.length)
	if(this.state.data.length==this.state.list.length){
		console.log(11,(this.state.data.length==this.state.list.length)?true:false)
		//  this.state.allcheck = true;
			// this.updateforce()
			// this.forceUpdate();
		// this.setState({
		// 	allcheck:true
		// })
	}
	
		
	}
	handleChange(index){
		console.log(index);
	}
	getData(){
		React.axios.post('http://localhost:3000/goods/getGoods',querystring.stringify({
			// id: goodId,
			user:77,
		}))
		.then((res)=>{
			console.log('res=',res);
			this.setState({
				list:res.data.data
			})
		})
		.catch((error)=>{
			console.log(error)
		})
	}
	remove(idx,e){
		
		var removeId=this.state.list.filter((item,i)=>{
			return idx==i
		})
		React.axios.post('http://localhost:3000/goods/delGood',querystring.stringify({
					_id:removeId[0]._id,
					user:removeId[0].user
				}))
				.then((res)=>{
					console.log(res);
				
					this.setState({
						list:res.data.data
					})
				})
				.catch((error)=>{
					console.log(error);
				})
		console.log(removeId);
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
						{/* <div className="store">
							<input type="checkbox" id="checkbox" 
						
							// onChange={this.handleChange.bind(this)} 
							name="" />
							<i className="iconfont icon-dianpu"></i>	
							<h3>潮男搭配师</h3>
						</div> */}
						<div className="cart_list">
							<ul>
							{
								(()=>{
									console.log(this.state.list)
									return this.state.list.map((item,index)=>{
										return (
											<li key={index}>
												<input type="checkbox" className="check"
												onChange={this.singlecheck.bind(this,index)}
												// checked={this.state.allcheck}
												checked={this.state.data[index]}
												 name=""/>
												<div className="cart_img">
													<img src={item.imgurl} />
												</div>
												<div className="good_list">
													<div className="cart_title">
														<div className="name"><p>{item.name}</p> <span  onClick={this.remove.bind(this,index)}> <i className="iconfont icon-shanchu" ></i></span></div>
													</div>
													<div className="price_qty">
														<span className="price">
															￥ {item.price}
														</span>
														<span className="qty">
															<input type="button" value="-" className="sub" onClick={this.subNum.bind(this,index)} name=""/>
															<input type="text" className='txt' value={item.qty} name=""/>
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
							<input type="checkbox" className="all"
							 onChange={this.chooseAll.bind(this)}
							 checked={(this.state.data.length==this.state.list.length)?true:false}
							// checked={false}
							  name="checkbox" />全选
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