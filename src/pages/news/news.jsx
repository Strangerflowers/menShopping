import React,{Component} from 'react';
import '../../styles/news.less';
import Footer from '../../components/Footer.jsx';

class News extends Component{
	render(){
		return (
				<div className='cart'>
					<div className="header">
						<div className="top">
							<div className="homeimg">
								<i className="iconfont icon-home"></i>
							</div>
							<div className="gologin">登陆</div>
						</div>
						<div className="center">
							<div className="user">
								<label htmlFor="uname">账户</label>
								<input type="text" id="uname"
								placeholder="用户名/邮箱/已验证手机" 
								 />
							</div>
							<div>
								<label htmlFor="pwd">密码</label>
								<input type="text" id="pwd"
								placeholder="登陆密码"
								 />
							</div>
							<div className="buttom">
								<div className="reg">
									<span className="seven">七天自动登陆</span>
									<span className="seven">
										<a href="https://www.baidu.com" >忘记密码?</a>
									</span>
								</div>
								<input className="login1" type="button" value="登陆" />
							</div>
						</div>
						
					</div>
					<div className="login">
						<div>
							<span></span>
							<span className="text">合作账号登陆</span>
							<span></span>
						</div>
						<div className="icon">
							<div className="weibo">
							    <i className="iconfont icon-weibo"></i>
							</div><div className="qq">
								<i className="iconfont icon-QQ"></i>
							</div>
						</div>
						<input type="button" value="手机注册" />
						
					</div>
					<Footer />
				</div>
			);
	}
}
 
export default News; 
 // aria-hidden="true"