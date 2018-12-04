import React from 'react';
import footerLess from '../styles/footer.less';
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
              <a href="#">
                <i className="home">
                </i>
                <p>首页</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="categroy"></i>
                <p>分类</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="search"></i>
                <p>消息</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="cart"></i>
                <p>购物车</p>
              </a>
            </li>
           <li>
              <a href="#">
                <i className="member"></i>
                <p>我的</p>
              </a>
            </li>
          </ul>
         </div>
        </footer>
      );
  }
}

export default Footer

  
  
