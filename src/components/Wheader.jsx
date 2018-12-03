import React from "react";
import style from '../styles/index.less';

class Mheader extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  
  render(){
    return (
         <header id="header">
          wenjian jia 
             <div className="logo"></div>
             <div className="header-wrap"> <a href="tmpl/search.html" className="header-inp"> <i className="icon"></i> <span className="search-input" id="keyword" placeholder=""></span> </a> </div>
             <div className="header-r"><a id="header-nav" href="tmpl/member/order_list.html"><i className="nsgdingdan"></i>
             <p>消息</p>
             <sup></sup></a></div>
           </header>
        
      );
  }
}


export default Mheader