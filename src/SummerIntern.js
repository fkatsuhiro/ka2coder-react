import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';
import { Link } from 'react-router-dom';

class SummerIntern extends Component {
  render() {
    const { CompanyName, SpanForInternShip, PositionOfIntern, UseLanguage, Content, url } = this.props;

    return (
      <div className='padding-bottom'>
        <div className='row'>
            <p className='subTitle'>{ CompanyName }</p>
            <div className='col-md-4'>
                <div className='bold'>期間: { SpanForInternShip }</div>
                <div className='bold'>役割: { PositionOfIntern }</div>
                <div className='bold'>使用言語: { UseLanguage }</div>
            </div>
            <div className='col-md-8'>{ Content }</div>
        </div>
        <Link to={"/ka2coder-react/Career/" + url}>
          <button className='btn btn-secondary' >View detail</button>
        </Link>
      </div>
    );
  }
}

export default SummerIntern;
