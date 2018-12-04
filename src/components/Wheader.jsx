import React from "react";
<<<<<<< HEAD
// import style from '../styles/index.less';
=======
import headerLess from '../styles/header.less';
>>>>>>> fa2d3fe7b1811412ccbb41492b69fbca01a84ad2

class Mheader extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  
  render(){
    return (
          <header id="header">
              <div className="logo"> </div>
                <div className="header-wrap"> 
                  <i className="search_l"></i>
                  <input  type="search" className="search" />
                </div>
                <div className="header-r">
                  <a id="header-nav" href="tmpl/member/order_list.html">
                    <i> </i>
                  </a>
              </div>
          </header>
        
      );
  }
}


export default Mheader