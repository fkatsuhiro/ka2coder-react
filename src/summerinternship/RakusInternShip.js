import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/main.css';
import RakusVideo1 from '../video/rakus_demo_video.mp4';
import RakusVideo2 from '../video/Vue.mp4';

class RakusInternShip extends Component {
    render() {

        return (
            <div className='page'>
                <div className='internship-text'></div>
                {/* article area */}
                <div className='internship-area'>
                    {/* title */}
                    <h3 className='internship-title' > Rakus Tech Lab </h3>
                    <div className='internship-article'>
                        <h6 className='internship-text'>期間:7/23,25,8/1,8</h6>
                        <div className='internship-text'>
                            7/23,25,8/1,8の4日間でチャットアプリの開発をテーマとしたラクス株式会社のインターンシップに参加しました
                            インターンシップでは、4~5人の即席チームが作成され、チャットアプリの開発を行いました。フロントエンドはVue.js(共通)を用い、バックエンドは必要に応じて利用する形のものでした。
                        </div>
                        <div className='internship-text'>
                            私のチームは、大学生が匿名で、テストのことや就職活動のことに関して質問することができる質問用チャットルームを作成しました。主な機能は以下の通りです。
                        </div>
                        <ul style={{ listStyle: 'square', paddingBottom: '1rem', width: '60%', margin: '0 auto' }}>
                            <li>質問ルームを選択・作成して入室する機能</li>
                            <li>投稿することができる</li>
                            <li>メモを記録することができる</li>
                            <li>他人の投稿をメモに残すことができる</li>
                            <li>メモの内容を投稿に移すことができる</li>
                            <li>ルームにほかの人が入室・退出した時にほかの人に周知される</li>
                            <li>再入室したときに記録が残されている</li>
                        </ul>
                        <div className='internship-text'>
                            使用した技術スタックは以下の通りです。
                        </div>
                        <ul style={{ listStyle: 'square', paddingBottom: '1rem', width: '60%', margin: '0 auto' }} >
                            <li>Vue.js</li>
                            <li>socket.io</li>
                            <li>SQL</li>
                        </ul>
                        <h5 className='internship-text'>実際の画面の動画</h5>
                        <video width="100%" controls>
                            <source src={RakusVideo1} type="video/mp4" />
                        </video>
                        <div className='internship-text'>
                            メンバーリストや投稿、メモの数が多くなった時に、スクロールするような作りにしてあります。
                        </div>
                        <video width="100%" controls>
                            <source src={RakusVideo2} type="video/mp4" />
                        </video>
                        <div className='internship-text'></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RakusInternShip;
