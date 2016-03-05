require('../sass/normalize.css');
require('../sass/register.scss');
require('../sass/transition.scss');

import React from 'react'
import {render} from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Router, Route, hashHistory, IndexRoute, Link} from 'react-router'
import RoundButton from './components/RoundButton'
import RegisterCourse from './registerCourse'
import RegisterBoat from './RegisterBoat'

class RegisterApp extends React.Component {
    render() {
      return (
        <ReactCSSTransitionGroup
          component="div"
          transitionName="default"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          style={{height: '100%', overflow: 'auto'}}
        >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}
        </ReactCSSTransitionGroup>
      )
    }
}

class RegisterIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style={{minHeight: '100%'}}>
            <RoundButton align="left" style={{'paddingTop': '10px'}} icon="user">SIGN<br/>UP</RoundButton>
            <RoundButton align="right" style={{'paddingTop': '10px', 'float': 'right'}} icon="refresh"></RoundButton>
            <h1 className="title-text">注册</h1>
            <div className="button-area">
                <Link to="course" className="course-button">
                    <i className="course-icon"></i>
                    <span>课程VIP</span>
                </Link>
                <Link to="boat" className="boat-button">
                    <i className="boat-icon"></i>
                    <span>独木舟VIP</span>
                </Link>
            </div>
            <img src={require("../public/images/page1_bottom.png")} className="img-bottom"/>
          </div>
        );
    }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={RegisterApp} >
      <IndexRoute component={RegisterIndex} />
      <Route path="course" component={RegisterCourse} />
      <Route path="boat" component={RegisterBoat} />
    </Route>
  </Router>,
  document.getElementById('container'));
