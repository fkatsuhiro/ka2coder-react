import React, { Component } from 'react';

class Presentation extends Component {
    render() {
        const { Title, PresentationTitle, slideUrl } = this.props;

        return (
            <div>
                <div className='subTitle'>{Title}</div>
                <div>{PresentationTitle}</div>
                <iframe src={slideUrl} style={{width: '100%', height:'300px'}} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div >
        );
    }
}

export default Presentation;