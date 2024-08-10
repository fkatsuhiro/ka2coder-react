import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';

class istyleInternShip extends Component {
    render() {

        return (
            <div className='page'>
                <div className='internship-text'></div>
                {/* article area */}
                <div className='internship-area'>
                    {/* title */}
                    <h3 className='internship-title' > istyle株式会社 サマーインターンシップ </h3>
                    <div className='internship-article'>
                        <h6 className='internship-text'>期間:7/1~31</h6>
                        <div className='internship-text'>
                            to B向けのWebアプリケーションの開発チームにフルスタックのポジションで開発業務に参画しました。開発、テスト、リリースなど、チーム開発ならではの経験をたくさんさせていただきました。
                        </div>
                        <div className='internship-text'>
                            詳細内容は現在作成中。。。。
                        </div>
                        <div className='internship-text'></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default istyleInternShip;
