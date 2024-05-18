import React, { Component } from 'react';

class SkillContent extends Component {
  render() {
    const { Language, Describe } = this.props;

    return (
      <div>
        <div className='row'>
            <div className='col-5'>{Language}</div>
            <div className='col-7'>{Describe}</div>
        </div>
      </div>
    );
  }
}

export default SkillContent;
