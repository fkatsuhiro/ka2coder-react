import React, { Component } from 'react';

class WorksWiderContent extends Component {
  render() {
    const { WorksUrl, WorksImgUrl, RepositoryUrl, ExplainUrl, WorksName, AboutWorksContent, WorksUseLanguage } = this.props;
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
                <h6 className='col-md-7'>
                  <div style={{textAlign: 'left'}}><span style={{color:'blue', fontSize: '1rem'}}>URL</span>:<a href={WorksUrl} target="_blank" rel="noopener noreferrer">プロダクトのURLはこちら</a></div>
                  <div style={{textAlign: 'left'}}><span style={{color:'blue', fontSize: '1rem'}}>Git Repository</span>: <a href={RepositoryUrl} target='_brank' rel="noopener noreferrer">リポジトリのURLはこちら</a></div>
                  <div style={{textAlign: 'left'}}><span style={{color:'blue', fontSize: '1rem'}}>Explain Slide</span>: <a href={ExplainUrl} target='_brank' rel="noopener noreferrer">説明スライドはこちら</a></div>
                </h6>
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
