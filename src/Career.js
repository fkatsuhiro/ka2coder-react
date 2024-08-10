import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';

class Career extends Component {
  render() {
    const { subTitle, subText, Content } = this.props;

    return (
      <div className='padding-bottom'>
        <div className='subTitle'>{subTitle}</div>
        <div className='bold'>{subText}</div>
        <div>{Content}</div>
      </div>
    );
  }
}

export default Career;
