require('../sass/normalize.css');
require('../sass/pay.scss')

import React, {Component} from 'react'
import RoundButton from './components/RoundButton'
import ScanImg from './components/ScanImg'

class PayResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <RoundButton align="left" style={{'top': '10px', 'position':'absolute', 'left':'0'}} icon="user">SIGN<br/>UP</RoundButton>
            <RoundButton align="right" style={{'top': '10px', 'position':'absolute', 'right':'0'}} icon="refresh"></RoundButton>
            <div className="center-area" style={{'top': '42%'}}>
              <h1 className="result-title">支付完成!</h1>
              <h2>恭喜你成为会员!</h2>

              <ScanImg style={{width: '150px', height: '150px', marginTop: '30px'}} />
              <h3 style={{marginTop: '10px'}}>XXX会员专属二维码</h3>
            </div>
            <img
              src={require("../public/images/page6_bottom.png")}
              className="img-bottom"
              style={{zIndex: -1}}
            />
          </div>
        );
    }
}

export default PayResult;
