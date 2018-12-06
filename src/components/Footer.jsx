import React from 'react';
import { Link } from "react-router-dom";
import '../styles/footer.less';
class Footer extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  render(){
    return (
        <footer id="footer">
         <div id="footnav" className="footnav clearfix">
          <ul>
            <li> 
              <Link to="/home/">
                <i className="home">
                </i>
                <p>首页</p>
              </Link>
            </li>
            <li>
              <Link to="/classify/">
                <i className="categroy"></i>
                <p>分类</p>
              </Link>
            </li>
            <li>
              <Link to="/news/">
                <i className="search"></i>
                <p>消息</p>
              </Link>
            </li>
            <li>
              <Link to="/cart/">
                <i className="cart"></i>
                <p>购物车</p>
              </Link>
            </li>
           <li>
              <Link to="/my/">
                <i className="member"></i>
                <p>我的</p>
              </Link>
            </li>
          </ul>
         </div>
        </footer>
      );
  }
}

export default Footer

  
  
