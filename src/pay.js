require('../sass/normalize.css');
require('../sass/pay.scss')
require('../sass/transition.scss')

import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import RoundButton from './components/RoundButton'
import PayResult from './payResult'

class PayApp extends Component {
    render() {
      return (
        <ReactCSSTransitionGroup
          component="div"
          transitionName="default"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}
        </ReactCSSTransitionGroup>
      )
    }
}

class PayIndex extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.context.router.push('result');
    }

    render() {
        return (
          <div>
            <RoundButton align="left" style={{'top': '10px', 'position':'absolute', 'left':'0'}} icon="user">SIGN<br/>UP</RoundButton>
            <RoundButton align="right" style={{'top': '10px', 'position':'absolute', 'right':'0'}} icon="refresh"></RoundButton>
            <div className="center-area">
                <h1>Y199</h1>
                <h3>(含99会员费，100元押金)</h3>
                <button onClick={this.handleClick}>微信支付</button>
                <i className="col1"></i>
                <i className="col2"></i>
                <i className="col3"></i>
            </div>
            <img src={require("../public/images/page5_bottom.png")} className="img-bottom"/>
          </div>
        );
    }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={PayApp}>
      <IndexRoute component={PayIndex} />
      <Route path="result" component={PayResult} />
    </Route>
  </Router>
  , document.getElementById('container'));
