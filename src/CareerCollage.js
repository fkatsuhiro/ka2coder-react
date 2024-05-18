import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';

class CareerCollage extends Component {
  render() {
    const { Text } = this.props;

    return (
      <div>
        <div className='textCollage'>{Text}</div>
      </div>
    );
  }
}

export default CareerCollage;
