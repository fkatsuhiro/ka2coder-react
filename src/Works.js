import React, { Component } from 'react';

class Works extends Component {
  render() {
    const { componentUrl, imgUrl, componentName } = this.props;
    return (
      <div>
        <div className="Works-Content Main-Screen-Width">
          <a href={componentUrl} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} className='images' />
            <div className="name-comp">{componentName}</div>
            <br />
          </a>
        </div>
        <br />
      </div>
    );
  }
}

export default Works;
