require('../sass/normalize.css');
require('../sass/register.scss');

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class RoundButton extends Component {
    static defaultProps = {
        align: 'left'
    }

    static propTypes = {
        align: React.PropTypes.oneOf(['left', 'right']),
        icon: React.PropTypes.oneOf(['user', 'refresh'])
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {align, icon, ...props} = this.props;
        return <div className={"round-button " + align} {...props}>
            <span className="round-part"></span>
            <i className={icon}></i>
            {this.props.children && (<span className="text-part">{this.props.children}</span>)}
            </div>;
    }
}

class RegisterIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <RoundButton align="left" style={{'paddingTop': '20px'}} icon="user">SIGN<br/>UP</RoundButton>
            <RoundButton align="right" style={{'paddingTop': '20px', 'float': 'right'}} icon="refresh"></RoundButton>
          </div>
        );
    }
}

ReactDOM.render(<RegisterIndex />, document.getElementById('container'));
