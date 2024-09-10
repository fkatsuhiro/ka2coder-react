/* Works Pageの詳細内容を更新するためのファイル*/
import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';
import Works from './WorksWiderContent';
import ChibaUnivHP from './images/ChibaunivHP.png';
import Webtext from './images/webtext.png';
import Chatapp from './images/chatapp.png';
import PointRecordApp from './images/PointRecordApp.png';
import MarkdownPdf from './images/MarkdownPdf.png';
import ToyotaCalTokushimaHP from './images/ToyotaTokushimaHP.png';
import WorksWiderContent from './WorksWiderContent';
import WorksDescription from './WorksDescription';

class WorksPagesUpdate extends Component {
    render() {
        //WorksWiderContentに代入する値
        const Links = [
            { WorksUrl: 'https://fkatsuhiro.github.io/webtext/', WorksImgUrl: Webtext, WorksName: '技術ブログ', AboutWorksContent: '技術ブログ。Vue.jsの学習のために制作。今後は、広告をつけて運用していく予定。', WorksUseLanguage: 'Vue (Vue Cli)' },
            { WorksUrl: 'https://fkatsuhiro.github.io/ka2coder-react/', WorksImgUrl: Chatapp, WorksName: '匿名チャットアプリ', AboutWorksContent: 'ラクスTech Labでチーム開発を行いました。匿名で投稿することのできるチャットアプリで、投稿、編集、削除、メモなどの機能を作りました。', WorksUseLanguage: 'Vue socket.io SQL' },
            { WorksUrl: 'https://chiba-univ-tennis.com/', WorksImgUrl: ChibaUnivHP, WorksName: '千葉大学硬式庭球部', AboutWorksContent: '千葉大学硬式庭球部のHP。レスポンシブ化、ランニングコスト削減のために制作。', WorksUseLanguage: 'HTML/CSS, JavaScript' },
            { WorksUrl: 'https://fkatsuhiro.github.io/PointRecord-app/', WorksImgUrl: PointRecordApp, WorksName: '試合記録アプリ', AboutWorksContent: 'サービスコース、ウィニングショット等を選択し、得点入力を行うことで、試合終了時に分析結果を表示することができるデータ分析用アプリ。', WorksUseLanguage: 'React JavaScript'},
            { WorksUrl: 'https://github.com/fkatsuhiro/NodeJS_Login?tab=readme-ov-file', WorksImgUrl: MarkdownPdf, WorksName: 'マークダウンPDFアプリ', AboutWorksContent: 'マークダウン記法で記述したものからPDF化するためのアプリ。プレビューボタンで完成形を確認することができます。', WorksUseLanguage: 'Node.js, Express' },
            { WorksUrl: 'https://corolla-tokushima.shojiki-satei.com/simulation', WorksImgUrl: ToyotaCalTokushimaHP, WorksName: 'トヨタカローラ徳島 正直査定', AboutWorksContent: '開発アルバイトの際に作成。現在では公開した当初のコードに変更が加えられていますが、最初の案件受注からフロント実装までを担当。', WorksUseLanguage: 'HTMl/CSS, JavaScript, jQuery' },
        ];

        return (
            <div className='page'>
                <WorksDescription />
                {Links.map((Item) => {
                    return (
                        <div className='Main-Screen-Width'>
                            <WorksWiderContent WorksUrl={Item.WorksUrl} WorksImgUrl={Item.WorksImgUrl} WorksName={Item.WorksName} AboutWorksContent={Item.AboutWorksContent} WorksUseLanguage={Item.WorksUseLanguage} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default WorksPagesUpdate;
