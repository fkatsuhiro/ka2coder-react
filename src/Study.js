import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';

class Study extends Component {
  render() {
    const { subTitle, subText, calcMethod ,Content } = this.props;

    return (
      <div>
        <div className='subTitle'>{subTitle}</div>
        <div className='bold'>{subText}</div>
        <div className='bold'>{calcMethod}</div>
        <div>{Content}</div>
      </div>
    );
  }
}

export default Study;
