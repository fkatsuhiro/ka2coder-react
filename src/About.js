import React, { Component } from 'react';
import './css/main.css';

class About extends Component {
  render() {
    return (
      <div>
        <p className="midasi">About</p>
        <div>古市勝寛と申します。</div>
        <div>
          学部は物理系、大学院では工学系に所属しています。大学の授業でプログラミングに興味を持ち、趣味、
          長期インターンシップ、ハッカソンなどで日々実力を磨いています。得意領域はWeb制作・フロントエンド開発です。
        </div>
      </div>
    );
  }
}

export default About;
