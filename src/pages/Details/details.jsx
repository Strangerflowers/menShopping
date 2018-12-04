import React from 'react';
import axios from 'axios';
import '../../styles/details.less';
class Content extends React.Component{
	constructor(props){
		super(props)
		this.state={
			goodsDetail: [],
			goodsname: '',
			Text1 : '',
			Text2 : '',
			Text3 : '',
			miaosu: '',
			fahuo : '',
			fuwu : '',
			goodsList: []

		}
	}
	// 获取数据
	getData(props){
		var currentId = this.props.match.params.id;
		axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=${currentId}&key=`)
		.then((res)=>{
			console.log(res.data.datas);
			var data = res.data.datas;
			var name = data.goods_info.goods_name;
			var price = data.goods_info.goods_price;
			var text1 = data.goods_hair_info.area_name;
			var text2 = data.goods_hair_info.if_store_cn;
			var text3 = data.goods_hair_info.content;
			var color = '';
			var size = '';
			var a = data.goods_info.goods_spec;
			var miaoS = data.store_info.store_credit.store_deliverycredit;
			var faH = data.store_info.store_credit.store_desccredit;
			var fuW = data.store_info.store_credit.store_servicecredit;
			var goodslist = data.goods_commend_list;
			console.log(data.goods_commend_list);
			this.setState({
				 goodsDetail : data,
				 goodsname : name,
				 goodsprice : price,
				 Text1 : text1,
				 Text2 : text2,
				 Text3 : text3,
				 miaosu : miaoS ,
				 fahuo : faH,
				 fuwu : fuW,
				 goodsList : goodslist 
			})
			var a = data.goods_info.goods_spec;
		})
		.catch((err)=>{
			console.log(err);
		})
	}
	componentWillMount(){
		this.getData();
	}
	render(){
		return (
			<div className="details">
			<div className="con">
					<div className="goods">
						<div>
							<img src={this.state.goodsDetail.goods_image} alt="" className="detailIMG"/>
						</div>
						<p className="title">{this.state.goodsname}</p>
						<p className="price"><span>{this.state.goodsprice}</span><span>销量</span></p>
						<p><span>{this.state.Text1}</span><span>{this.state.Text2}</span><span>{this.state.Text3}</span></p>
						<p><span>已选</span><span>颜色</span><span>尺码</span></p>
					</div>
					<p className="evaluate">商品评价</p>
					<div className="shop">
						<p className="name">潮衣阁</p>
						<p><span>{this.state.miaosu.text}</span>{this.state.miaosu.credit}<span>{this.state.fahuo.text}</span>{this.state.fahuo.credit}<span>{this.state.fuwu.text}</span>{this.state.fuwu.credit}</p>
					</div>
					<div className="goodslist">
						<p>店铺推荐</p>
						<ul>
							{
								(()=>{
									return this.state.goodsList.map((item,index)=>{
									return <li key>
												<img src={item.goods_image_url} alt="" />
												<p>{item.goods_name}</p>
												<span>{item.goods_promotion_price}</span>
											</li>
									})
								})()
							}
						</ul>
					</div>
					<div className="more">查看更多</div>
				</div>
				
			</div>
		)
	}
}
export default Content;
