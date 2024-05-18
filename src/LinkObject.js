import React, { Component } from 'react';

class LinkObject extends Component {
  render() {
    const { Service, Account, ServiceUrl } = this.props;

    return (
      <div>
        <div className='row'>
            <div className='col-5'>{Service}</div>
            <a className='col-7' href={ServiceUrl} target="_blank" rel="noopener noreferrer">{Account}</a>
        </div>
      </div>
    );
  }
}

export default LinkObject;
