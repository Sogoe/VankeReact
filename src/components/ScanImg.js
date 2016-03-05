require('./ScanImg.scss');

import React from 'react'

class ScanImg extends React.Component {
    static propTypes = {
        src: React.PropTypes.string.isRequired
    }

    render() {
      return (
        <div className="scan-img-container" {...this.props}>
          <div className="scan-img-left-top"></div>
          <div className="scan-img-right-top"></div>
          <div className="scan-img-left-bottom"></div>
          <div className="scan-img-right-bottom"></div>
          <img src={this.props.src} />
        </div>
      )
    }
}

export default ScanImg;
