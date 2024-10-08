import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';
import Works from './Works';
import hpImage from './images/hpimages.jpg';
import Roulette from './images/roulette-app.jpg';
import Webapp from './images/webapp.jpg';
import NodeJsLogin from './images/NodeJsLogin.jpg';
import Calc from './images/calcimage.jpg';
import Form from './images/formimages.jpg';
import Graph from './images/graphimage.jpg';
import Tokushima from './images/tokusima_web.jpg';
import OldPortforio from './images/OldPortforio.jpg';

class WorksPage extends Component {
  render() {
    //Worksコンポーネントに代入するprops
    const Links = [
      { pageUrl: 'https://work-efficiency.onrender.com/', imgUrl: Graph, componentName: '業務効率化アプリ' },
      { pageUrl: 'https://chiba-univ-tennis.com/', imgUrl: hpImage, componentName: '千葉大学硬式庭球部' },
      { pageUrl: 'https://fkatsuhiro.github.io/Roulette/', imgUrl: Roulette, componentName: 'ルーレットアプリ' },
      { pageUrl: 'https://fkatsuhiro.github.io/PointRecord-app/', imgUrl: Webapp, componentName: '試合記録アプリ' },
      { pageUrl: 'https://github.com/fkatsuhiro/NodeJS_Login', imgUrl: NodeJsLogin, componentName: 'Markdown資料作成ツール' },
      { pageUrl: 'https://fkatsuhiro.github.io/calc/', imgUrl: Calc, componentName: '電卓機能' },
      { pageUrl: 'https://fkatsuhiro.github.io/kintasystem/', imgUrl: Form, componentName: '予約入力フォーム' },
      { pageUrl: 'https://corolla-tokushima.shojiki-satei.com/simulation', imgUrl: Tokushima, componentName: 'トヨタカローラ徳島 正直査定' },
      { pageUrl: 'https://fkatsuhiro.github.io/ka2coder/', imgUrl: OldPortforio, componentName: '(旧)ポートフォリオ' }
    ];

    return (
      <div className='page'>
        <p className='midasi'>Works</p>
        {Links.map((LinksItem, index) => {
          const oddIndex = index * 2;
          const oddItem = Links[oddIndex];
          const evenIndex = index * 2 + 1;
          const evenItem = Links[evenIndex];
          return (
            <div className='row'>
              {oddItem && (
                <div className='col-md-6'>
                  <Works componentUrl={oddItem.pageUrl} imgUrl={oddItem.imgUrl} componentName={oddItem.componentName} />
                </div>
              )}
              {evenItem && (
                <div className='col-md-6'>
                  <Works componentUrl={evenItem.pageUrl} imgUrl={evenItem.imgUrl} componentName={evenItem.componentName} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    );
  }
}

export default WorksPage;
