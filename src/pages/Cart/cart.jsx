import 'antd/dist/antd.css';
import React,{ Component } from 'react';
import { Drawer, Button, Radio } from 'antd';
import '../../styles/addcart.less';

const RadioGroup = Radio.Group;
class Addcart extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
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
  }

  render() {
    return (
      <div className="addcart">
	      	<div>
	      		<span>客服</span>
	      		<span>购物车 </span>

		        <RadioGroup
		          style={{ marginRight: 8 }}
		          defaultValue={this.state.placement}
		          onChange={this.onChange}
		        >
		        </RadioGroup>
		        <Button type="primary" onClick={this.showDrawer}>
		          立即购买
		        </Button>
	      		<span>加入购物车</span>

		        <Drawer
		          title="Basic Drawer"
		          placement='bottom'
		          closable={true}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		        </Drawer>
	        </div>
      </div>
    );
  }
}

export default Addcart; 

