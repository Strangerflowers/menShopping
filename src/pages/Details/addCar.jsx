// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
// import React,{ Component } from 'react';
// import { Modal, Button } from 'antd';
// class Homecontent extends React.Component {
//   state = {
//     modal1Visible: false,
//     modal2Visible: false,
//   }

//   setModal1Visible(modal1Visible) {
//     this.setState({ modal1Visible });
//   }

//   setModal2Visible(modal2Visible) {
//     this.setState({ modal2Visible });
//   }

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={() => this.setModal1Visible(true)}>Display a modal dialog at 20px to Top</Button>
//         <Modal
//           title="20px to Top"
//           style={{ top: 20 }}
//           visible={this.state.modal1Visible}
//           onOk={() => this.setModal1Visible(false)}
//           onCancel={() => this.setModal1Visible(false)}
//         >
//           <p>some contents...</p>
//           <p>some contents...</p>
//           <p>some contents...</p>
//         </Modal>
//         <br /><br />
//         <Button type="primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
//         <Modal
//           title="Vertically centered modal dialog"
//           centered
//           visible={this.state.modal2Visible}
//           onOk={() => this.setModal2Visible(false)}
//           onCancel={() => this.setModal2Visible(false)}
//         >
//           <p>some contents...</p>
//           <p>some contents...</p>
//           <p>some contents...</p>
//         </Modal>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Homecontent />, mountNode);
// export default Homecontent;
import 'antd/dist/antd.css';
import React,{ Component } from 'react';
import { Drawer, Button, Radio } from 'antd';
const RadioGroup = Radio.Group;
class Cart extends React.Component {
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
      <div className="footer">
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

export default Cart; 

