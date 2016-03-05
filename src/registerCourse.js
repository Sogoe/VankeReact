import React from 'react'

class RegisterCourse extends React.Component {
    render() {
      return (
        <div style={{minHeight: '100%', paddingBottom: '30px'}}>
          <img src={require('../public/images/page2_top.png')} className="img-top" />
          <div className="button-area">
            <a className="course-button">
                <i className="course-icon"></i>
                <span>课程VIP</span>
            </a>
          </div>
          <div className="input-area">
            <span className="user">家长姓名</span><input type="text" /><br/>
            <span className="child">孩子姓名</span><input type="text" /><br/>
            <span className="phone">手机号码</span><input type="tel" />
          </div>
          <div className="checkbox-area">
            <input type="checkbox"/>同意XXX条款
          </div>
          <button className="course-submit">提交</button>
        </div>
      )
    }
}

export default RegisterCourse;
