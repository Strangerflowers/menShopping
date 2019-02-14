import React from 'react';
import "../../styles/mine.css";
// import "../../styles/base1.css"
class Mine extends React.Component{
    render(){
        return(
               <div class="scroller-body">
                <div class="scroller-box">
                    <div class="member-top"><div class="member-info"><div class="user-avatar"> <img src="https://www.nanshig.com/data/upload/shop/common/default_user_portrait.gif"> </div><div class="user-name"> <span>phone_17687740134<sup>V0</sup></span> </div></div><div class="member-collect"><span><a href="favorites.html"><em>0</em><p>商品收藏</p></a> </span><span><a href="favorites_store.html"><em>0</em><p>店铺收藏</p></a> </span><span><a href="views_list.html"><i class="goods-browse"></i><p>我的足迹</p></a> </span></div></div>
                    <div class="member-center">
                    <dl class="mt5">
                        <dt><a href="order_list.html">
                        <h3><i class="mc-01"></i>全部订单</h3>
                        <h5><i class="arrow-r"></i></h5>
                        </a></dt>
                        <dd>
                        <ul id="order_ul"><li><a href="order_list.html?data-state=state_new"><i class="cc-01"></i><p>待付款</p></a></li><li><a href="order_list.html?data-state=state_send"><i class="cc-02"></i><p>待收货</p></a></li><li><a href="order_list.html?data-state=state_notakes"><i class="cc-03"></i><p>待自提</p></a></li><li><a href="order_list.html?data-state=state_noeval"><i class="cc-04"></i><p>待评价</p></a></li><li><a href="member_refund.html"><i class="cc-05"></i><p>退款/退货</p></a></li></ul>
                        </dd>
                    </dl>
                    <dl class="mt5">
                        <dt><a href="member_asset.html">
                        <h3><i class="mc-02"></i>我的财产</h3>
                        <h5><i class="arrow-r"></i></h5>
                        </a></dt>
                        <dd>
                        <ul id="asset_ul"><li><a href="predepositlog_list.html"><i class="cc-06"></i><p>预存款</p></a></li><li><a href="rechargecardlog_list.html"><i class="cc-07"></i><p>充值卡</p></a></li><li><a href="voucher_list.html"><i class="cc-08"></i><p>代金券</p></a></li><li><a href="redpacket_list.html"><i class="cc-09"></i><p>红包</p></a></li><li><a href="pointslog_list.html"><i class="cc-10"></i><p>积分</p></a></li></ul>
                        </dd>
                    </dl>
                    <dl class="mt5">
                        <dt><a href="address_list.html">
                        <h3><i class="mc-03"></i>收货地址</h3>
                        <h5><i class="arrow-r"></i></h5>
                        </a></dt>
                    </dl>
                    <dl style="border-top: solid 0.05rem #EEE;">
                        <dt><a href="member_account.html">
                        <h3><i class="mc-04"></i>系统设置</h3>
                        <h5><i class="arrow-r"></i></h5>
                        </a></dt>
                    </dl>
                    </div>
                </div>
                <footer id="footer"><div id="footnav" class="footnav clearfix"><ul><li><a href="https://www.nanshig.com/wap"><i class="home"></i><p>首页</p></a></li><li><a href="https://www.nanshig.com/wap/tmpl/product_first_categroy.html"><i class="categroy"></i><p>分类</p></a></li><li><a href="https://www.nanshig.com/wap/tmpl/member/chat_list.html"><i class="search"></i><p>消息</p></a></li><li><a href="https://www.nanshig.com/wap/tmpl/cart_list.html"><i class="cart"></i><p>购物车</p></a></li><li><a href="https://www.nanshig.com/wap/tmpl/member/member.html"><i class="member"></i><p>我的</p></a></li></ul></div></footer>
                </div>
            </div>
        )
    }
}