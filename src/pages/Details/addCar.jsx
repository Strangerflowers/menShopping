import 'antd/dist/antd.css';
import React,{ Component } from 'react';
import { Drawer, Button, Radio } from 'antd';
import '../../styles/addcart.less';

const RadioGroup = Radio.Group;
class Addcart extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props);
  }
  state = { visible: false, placement: 'left' ,goods: this.props};


  showDrawer = () => {
    this.setState({
      visible: true,
    });
    // console.log(this.state.goods);
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };
  getGoods(){
    console.log(this.state.goods);
  }
  componentWillMount(){
    this.getGoods()
  }

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
            {/*<span className="aadCar">加入购物车</span>*/}
            <Drawer
              placement='bottom'
              closable={true}
              onClose={this.onClose}
              visible={this.state.visible}
              maskStyle={{backgroundColor: "rgba(0,0,0,.3)" }}
            >
            
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
      </div>
    );
  }
}

export default Addcart; 



