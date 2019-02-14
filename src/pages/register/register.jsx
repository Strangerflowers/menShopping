import React from 'react';
import "../../styles/register.less";
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            
        }
    }


    render(){
        return(
            <div className="register">
                <div className="head">
                    <i className="iconfont icon-jiantouarrowhead7"></i>
                    <p>用户注册</p>  
                    <p className="golg">登录</p>    
                </div>
                <div className="uname input-group-prepend">
                    <label htmlFor="uname" >用户名：</label>
                    <input type="text" className="username form-control" id="uname"placeholder="手机邮箱"/>
                    {/* <p className="err">该用户名已存在</p> */}
                </div>
                <div className="password input-group-prepend">
                    <label htmlFor="passowrd" >
                        密码：
                    </label>
                    <input type="password" className="password form-control" id="passowrd" placeholder="密码" />
                </div>
                <div className="confirm input-group-prepend" >
                    <label htmlFor="confirm"  >
                        确认密码：
                    </label>
                    <input type="password" className="confirm form-control" id="confirm" />
                </div>
                <div className="vCode">
                    <span className="getCode">获取验证码</span>
                    <input type="text" className="icode form-control"/>
                </div>
                <div className="reg">
                    <button className="btn-reg btn">注册</button>
                </div>
            </div>
        )
    }
}

export default Register;