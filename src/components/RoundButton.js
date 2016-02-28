import React, {Component} from 'react'

class RoundButton extends Component {
    static defaultProps = {
        align: 'left'
    }

    static propTypes = {
        align: React.PropTypes.oneOf(['left', 'right']),
        icon: React.PropTypes.oneOf(['user', 'refresh', 'card'])
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

module.exports = RoundButton;
