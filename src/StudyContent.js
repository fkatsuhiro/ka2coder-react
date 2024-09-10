import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';

class StudyContent extends Component {
  render() {
    const { subTitle,Content } = this.props;

    return (
      <div>
        <div className='subTitle'>{subTitle}</div>
        <div>{Content}</div>
      </div>
    );
  }
}

export default StudyContent;
