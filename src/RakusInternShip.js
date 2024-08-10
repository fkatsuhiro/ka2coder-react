import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';
import RakusVideo1 from './video/rakus_demo_video.mp4';
import RakusVideo2 from './video/Vue.mp4';

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
                        <h5 className='internship-text'>インターンスケジュール</h5>
                        <h6 className='internship-text'>1日目</h6>
                        <div className='internship-text'>
                            1日目は、主にラクス株式会社の会社説明と、チーム内でのブレイクタイムがあり、その後、資料を基に環境準備を行いました。その後、開発するアプリをどんな内容にするかをチーム内で話し合い、その日の活動は終わりました。
                        </div>
                        <h6 className='internship-text'>2日目</h6>
                        <div className='internship-text' >
                            2日目は、エンジニア社員の方の日常、入社からのスケジュールなど、入社後の雰囲気の説明と質疑応答、その後開発時間と平行して社員の方と1on1を行いました。
                        </div>
                        <h6 className='internship-text'>3日目</h6>
                        <div className='internship-text'>
                            3日目は製品の説明、開発時間、最終発表の案内がありました。この日は開発の時間が多く取れ、チーム内で最終発表に向けてするべきことを洗い出すことができました。
                        </div>
                        <h6 className='internship-text'>4日目</h6>
                        <div className='internship-text'>
                            最終日にチームで成果発表を行いました。その後は、社員の方を交えて懇親会があり、楽しくインターンシップの活動をすることができました。
                        </div>
                        <div className='internship-text'></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RakusInternShip;
