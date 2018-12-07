import 'antd/dist/antd.css';
import React from 'react';
import { Drawer, Button, Radio } from 'antd';
import '../../styles/addcart.less';

const RadioGroup = Radio.Group;
class Addcart extends React.Component { 
  state = { visible: false, placement: 'left' ,goods: 1111111,goodsdata: ''};
 
  showDrawer = () => {
    var a = this.props;
    console.log(this.props);
    this.setState({
      visible: true,
      goodsdata: a
    });
    // var a = this.props;
    console.log(a);
    // this.setState({
      // goodsdata: this.props
    // })
    console.log(333,this.state.goodsdata);
  };
  onClose = () => {
      this.setState({
      goodsdata: this.props
    })
    console.log(444,this.state.goodsdata);
    this.setState({
      visible: false,
    });
  }; 

  onChange = (e) => {
    this.setState({
      goodsdata: this.props
    })
    console.log(555,this.state.goodsdata);

    this.setState({
      placement: e.target.value,
    });
  };
  // getGoods(){
  //   console.log(nextProps);
  //   var goodsData = nextProps.goods;
  //   console.log(goodsData);
  //    this.setState({
  //     goods: goodsData
  //     // goodsdata: goodsData
  //   })
  //    console.log(222222222,this.state.goods);
  // }

  //  componentWillMount(){
  //   this.getGoods();
  // }
//   componentWillReceiveProps(nextProps){
//     // this.getGoods();
//     console.log(nextProps);
//     var goodsData = nextProps;
//      this.setState({
//       goods: goodsData
      
//     })
//      console.log(this.state.goods);

// }
  render() {
    return (
      <div className="addcart">
          <div>
            <span className="service">客服</span>
            <span className="car">购物车 </span>

            <RadioGroup
              style={{ marginRight: 8 }}
              defaultValue={this.state.placement}
              onChange={this.onChange}
            >
            </RadioGroup>
            <Button type="primary" onClick={this.showDrawer} className="buy">
              立即购买
            </Button>
             <Button type="primary" onClick={this.showDrawer} className="addCar">
              加入购物车
            </Button>
            <Drawer
              placement='bottom'
              closable={true}
              onClose={this.onClose}
              visible={this.state.visible}
              maskStyle={{backgroundColor: "rgba(0,0,0,.3)" }}
              height="312px"
            >
              <div className="Goods">
                <div className="goods">
                  <div className="goodscon">
                    <img src="" alt="" />
                    <div>
                      <p>title</p>
                      <p><span></span><span></span></p>
                    </div>
                  </div>
                </div>
                <div className="goodsSelect">                
                  <div className="color">
                    <p>颜色:</p>
                    <p className="select"><span>1</span></p>
                  </div>               
                  <div className="size">
                    <p>尺码:</p>
                    <p className="select"><span>1</span></p>
                  </div>               
                </div>
                <div className="buynum">
                  <span>购买数量</span><span></span>
                </div>
                <div className="bottom">111111</div>
              </div> 
            </Drawer>
          </div>
      </div>
    );
  }
}
export default Addcart; 



// <!-- <div className="Goods">
//   <div className="goods">
//     <div className="goodscon">
//       <img src="" alt="" />
//       <div>
//         <p>title</p>
//         <p><span></span><span></span></p>
//       </div>
//     </div>
//   </div>
//   <div className="goodsSelect">                
//     <div className="color">
//       <p>颜色:</p>
//       <p className="select"><span>1</span></p>
//     </div>               
//     <div className="size">
//       <p>尺码:</p>
//       <p className="select"><span>1</span></p>
//     </div>               
//   </div>
//   <div className="buynum">
//     <span>购买数量</span><span></span>
//   </div>
//   <div className="bottom">111111</div>
// </div>  -->