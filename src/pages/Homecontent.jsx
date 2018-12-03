import React,{ Component } from 'react';
import '../styles/Homecontent.less';
import axios from 'axios';

// 引入轮播图
import ReactSwiper from 'reactjs-swiper';

const ReactSwiperExample = (props) => {
	console.log(props);
	var items = [];
	for(var i=0;i<props.banner.length;i++){
		items.push({
			image: props.banner[i].image,
			title: props.banner[i].data,
			link: props.banner[i].type
		})
		console.log(props[i]);
		console.log(items);
	}
  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  return (
    <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                 className="swiper-example" />
  );
};

class Homecontent extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			goodslist : [],
			banner: []
		}
	}
	// goPage(){}
	getData(){
		axios.get('https://www.nanshig.com/mobile/index.php?act=index')
		.then((res)=>{
			console.log(res);
			var data = res.data.datas;
			var goods = [];
			var banners = data[0].adv_list.item;
			for(var i=0;i<data.length;i++){
				if(i>0){
					goods.push(data[i]);
				}	
			}
			this.setState({
				 goodslist : goods,
				 banner : banners
			})
			console.log(this.state.banner);
		})
		.catch((err)=>{
			console.log(err);
		})
	}
	componentDidMount(){
		this.getData();
	}
	render(){
		return (
			<div className="Homecontent">
				<div className="bannerBox">
					<div className="banner">
						<ReactSwiperExample banner={this.state.banner}/>
					</div>
				</div>
				{
					(()=>{
						return this.state.goodslist.map((items,index)=>{
							return (
								<div className="goods" key={index}>
									<p className="title">{items.goods.title}</p>
									<ul>
										{
											(()=>{
												return items.goods.item.map((item,index)=>{
													return (
														<li key={index}>
			 												<img src={item.goods_image} className="goodsImg"/>
			 												<p>{item.goods_name}</p>
			 												<p className="price">{item.goods_price}</p>
			 											</li>
														)
												})
											})()
										}
									</ul>
								</div>
								)
						})
					})()
				}
			</div>
		);
	}
}
export default Homecontent;

// <div className="goods">
// <p className="title">text1</p>
// <ul>
// 	<li>
// 		<img src="" className="goodsImg"/>
// 		<p >text</p>
// 		<p className="price">price</p>
// 	</li>
// </ul>
// </div>

// <li>
//  												<img src={item.goods.item.goods_image} className="goodsImg"/>
//  												<p >item.goods.item.goods_name</p>
//  												<p className="price">item.goods.item.goods_price</p>
//  											</li>