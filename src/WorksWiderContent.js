import React, { Component } from 'react';

class WorksWiderContent extends Component {
  render() {
    const { WorksUrl, WorksImgUrl, WorksName, AboutWorksContent,
        WorksUseLanguage } = this.props;
    return (
      <div>
        <br />
        <div className="Main-Screen-Width">
            <div className='row'>
                <div className='col-md-5'>
                    <h5 className='Works-Create-Reason'><a href={WorksUrl} target="_blank" rel="noopener noreferrer">{WorksName}</a></h5>
                    <br />
                    <h6 className='Works-Create-Reason'>作品概要:</h6>
                    <div className='Works-Create-Reason'>{AboutWorksContent}</div>
                </div>
                <div className='col-md-7'>
                    <img src={WorksImgUrl} className='images' />
                </div>
            </div>
            <div className='row'>
                <h6 className='col-md-5 Works-Create-Reason'>言語:{WorksUseLanguage}</h6>
                <h6 className='col-md-7'>URL:<a href={WorksUrl} target="_blank" rel="noopener noreferrer">{WorksUrl}</a></h6>
            </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default WorksWiderContent;
