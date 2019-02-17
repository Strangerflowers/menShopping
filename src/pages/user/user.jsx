
import Footer from '../../components/Footer.jsx';
import React from 'react';
import "../../styles/mine.css";
// import "../../styles/base1.css";
class User extends React.Component {
	render() {
		return (
			<div className="scroller-body">
				<div className="scroller-box">
					<div className="member-top">
						<div className="member-info">
							<div className="user-avatar">
								<img src="https://www.nanshig.com/data/upload/shop/common/default_user_portrait.gif" /> </div>
							<div className="user-name"> <span>登录<sup></sup></span> </div></div>
						<div className="member-collect">
							<span><a href="favorites.html"><em>0</em><p>商品收藏</p></a> </span>
							<span><a href="favorites_store.html"><em>0</em><p>店铺收藏</p></a> </span>
							<span><a href="views_list.html"><i className="goods-browse"></i><p>我的足迹</p></a> </span>
						</div>
					</div>
					{/* <div className="member-center">
						<dl className="mt5">
							<dt><a href="order_list.html">
								<h3><i className="mc-01"></i>全部订单</h3>
								<h5><i className="arrow-r"></i></h5>
							</a></dt>
							<dd>
								<ul id="order_ul">
									<li>
										<a href="order_list.html?data-state=state_new">
											<i className="cc-01"></i>
											<p>待付款</p>
										</a>
									</li>
									<li>
										<a href="order_list.html?data-state=state_send">
											<i className="cc-02"></i>
											<p>待收货</p>
										</a>
									</li>
									<li>
										<a href="order_list.html?data-state=state_notakes">
											<i className="cc-03"></i>
											<p>待自提</p>
										</a>
									</li>
									<li>
										<a href="order_list.html?data-state=state_noeval">
											<i className="cc-04"></i>
											<p>待评价</p>
										</a>
									</li>
									<li><a href="member_refund.html">
										<i className="cc-05"></i>
										<p>退款/退货</p>
									</a>
									</li>
								</ul>
							</dd>
						</dl>
						<dl className="mt5">
							<dt><a href="member_asset.html">
								<h3><i className="mc-02"></i>我的财产</h3>
								<h5><i className="arrow-r"></i></h5>
							</a></dt>
							<dd>
								<ul id="asset_ul">
									<li>
										<a href="predepositlog_list.html">
											<i className="cc-06"></i>
											<p>预存款</p>
										</a>
									</li>
									<li>
										<a href="rechargecardlog_list.html">
											<i className="cc-07">
											</i><p>充值卡</p>
										</a>
									</li>
									<li>
										<a href="voucher_list.html">
											<i className="cc-08"></i>
											<p>代金券</p>
										</a>
									</li>
									<li>
										<a href="redpacket_list.html">
											<i className="cc-09"></i>
											<p>红包</p>
										</a>
									</li
									><li>
										<a href="pointslog_list.html">
											<i className="cc-10"></i>
											<p>积分</p>
										</a>
									</li>
								</ul>
							</dd>
						</dl>
						<dl className="mt5">
							<dt><a href="address_list.html">
								<h3><i className="mc-03"></i>收货地址</h3>
								<h5><i className="arrow-r"></i></h5>
							</a></dt>
						</dl>
						<dl style={{ borderTop: ' solid 0.05rem #EEE' }}>
							<dt><a href="member_account.html">
								<h3><i className="mc-04"></i>系统设置</h3>
								<h5><i className="arrow-r"></i></h5>
							</a></dt>
						</dl>
					</div> */}
				</div>
				{/* <footer id="footer">
					<div id="footnav" className="footnav clearfix">
						<ul>
							<li><a href="https://www.nanshig.com/wap">
								<i className="home"></i><p>首页</p></a>
							</li>
							<li
							><a href="#">
									<i className="categroy"></i>
									<p>分类</p>
								</a>
							</li>
							<li>
								<a href="https://www.nanshig.com/wap/tmpl/member/chat_list.html" >
									<i className="search"></i>
									<p>消息</p>
								</a>
							</li>
							<li>
								<a href="#" >
									<i className="member"></i>
									<p>我的</p>
								</a>
							</li>
						</ul>
					</div>
				</footer> */}
				<Footer />
			</div>


		)
	}
}
export default User