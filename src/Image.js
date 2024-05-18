import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { ImgUrl } = this.props;

    return (
      <img src={ImgUrl} />
    );
  }
}

export default Image;
