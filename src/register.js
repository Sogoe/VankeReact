require('../sass/normalize.css');
require('../sass/register.scss');

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RoundButton from './components/RoundButton'

class RegisterIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <RoundButton align="left" style={{'paddingTop': '10px'}} icon="user">SIGN<br/>UP</RoundButton>
            <RoundButton align="right" style={{'paddingTop': '10px', 'float': 'right'}} icon="refresh"></RoundButton>
            <h1 className="title-text">注册</h1>
            <div className="button-area">
                <a href="xx" className="course-button">
                    <i className="course-icon"></i>
                    <span>课程VIP</span>
                </a>
                <a href="xx" className="boat-button">
                    <i className="boat-icon"></i>
                    <span>独木舟VIP</span>
                </a>
            </div>
            <img src={require("../public/images/page1_bottom.png")} className="img-bottom"/>
          </div>
        );
    }
}

ReactDOM.render(<RegisterIndex />, document.getElementById('container'));
