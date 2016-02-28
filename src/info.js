require('../sass/normalize.css');
require('../sass/info.scss');

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RoundButton from './components/RoundButton'

class InfoIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <RoundButton align="left" style={{'paddingTop': '10px'}} icon="card">我的<br/>会员卡</RoundButton>
            <RoundButton align="right" style={{'paddingTop': '10px', 'float': 'right'}} icon="refresh"></RoundButton>
            <div className="content-container">
              <div>
              <div className="image-area">
                <img className="user-img"/>
                <div>
                <span>张三</span><br/>
                <span>李四</span>
                </div>
              </div>
              <div className="button-area">
                  <a href="xx" className="course-superman">
                      <i className="course-icon"></i>
                      <span>课程达人</span>
                  </a>
                  <a href="xx" className="read-superman">
                      <i className="read-icon"></i>
                      <span>阅读达人</span>
                  </a>
              </div>
              <h3 style={{marginLeft: '10px'}}>独木舟</h3>
              <div className="borrow-area">
                <img className="book-img"/>
                <div>
                  <span>借书时间</span><span className="time-text">2016-01-01 18:30</span><br/>
                  <span>还书时间</span><span className="time-text">2016-01-01 18:30</span>
                </div>
              </div>
              <div className="operation-area">
                <span>押金</span>
                <button className="border-button">补齐</button>
              </div>
              </div>
            </div>
            <img src={require("../public/images/page7_bottom.png")} className="img-bottom"/>
          </div>
        );
    }
}

ReactDOM.render(<InfoIndex />, document.getElementById('container'));
