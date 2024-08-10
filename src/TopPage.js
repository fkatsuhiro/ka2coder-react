import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';
import About from './About';
import Works from './Works';
import hpImage from './images/hpimages.jpg';
import NodeJsLogin from './images/NodeJsLogin.jpg';
import Roulette from './images/roulette-app.jpg';
import Webapp from './images/webapp.jpg';
import Calc from './images/calcimage.jpg';
import Form from './images/formimages.jpg';
import Graph from './images/graphimage.jpg';
import Tokushima from './images/tokusima_web.jpg';
import OldPortforio from './images/OldPortforio.jpg';
import Career from './Career';
import StudyContent from './StudyContent';
import SkillContent from './SkillContent';
import LinkObject from './LinkObject';


class TopPage extends Component {
  render() {
    //Worksコンポーネントに代入するprops
    const Links = [
      { pageUrl: 'https://github.com/fkatsuhiro/NodeJS_Login', imgUrl: NodeJsLogin , componentName: 'Markdown資料作成ツール'},
      { pageUrl: 'https://fkatsuhiro.github.io/PointRecord-app/', imgUrl: Webapp, componentName: '試合記録アプリ' },
      { pageUrl: 'https://fkatsuhiro.github.io/calc/', imgUrl: Calc, componentName: '電卓機能' },
      { pageUrl: 'https://fkatsuhiro.github.io/kintasystem/', imgUrl: Form, componentName: '予約入力フォーム' },
      { pageUrl: 'https://fkatsuhiro.github.io/graf_type/', imgUrl: Graph, componentName: 'グラフ作成ツール' },
      { pageUrl: 'https://corolla-tokushima.shojiki-satei.com/simulation', imgUrl: Tokushima, componentName: 'トヨタカローラ徳島 正直査定' },
      { pageUrl: 'https://chiba-univ-tennis.com/', imgUrl: hpImage, componentName: '千葉大学硬式庭球部' },
      { pageUrl: 'https://fkatsuhiro.github.io/Roulette/', imgUrl: Roulette, componentName: 'ルーレットアプリ' },
      { pageUrl: 'https://fkatsuhiro.github.io/ka2coder/', imgUrl:OldPortforio, componentName: '(旧)ポートフォリオ' },
    ];

    const CareerContent = [
      { subTitle: 'SAMURAI株式会社', subText: '期間: 2022/8~2023/7', Content: 'QAエンジニアとして、自社開発のアプリケーションにおける新規機能の追加などのプロジェクトに携わりました。実装された機能が、テスト環境で正常に動作するかどうかを確認する役割を担いました。作成するテスト項目がもれなく、 重複しないように、綿密なテストケースを作成し、実行しました。この業務を通して、正確で効率的なテストケースの書き方や、バグの特定・修正の方法を習得しました。さらに、現役のエンジニアの方との密接なコミュニケーションを通じて、実装からテストまでプロジェクトを円滑に進めることができました。' },
      { subTitle: 'Inspiration株式会社', subText: '期間: 2023/9~2024/2', Content: '開発のポジションで業務に携わりました。 自社開発のアプリケーションのデザイン修正や新規HPの実装を主に担当しました。日々の業務では、1日に1回程度、エンジニアの方とコミュニケーションを取りながら業務の進捗状況や課題について相談し、アドバイスをいただきました。 この経験を通じて、コードの可読性やCSSの命名規則など、個人プロジェクトと業務でのコーディングの違いを学びました。また、実務経験を通して、チームでの効果的なコミュニケーションやプロジェクトの推進力も身につけることができました。' },
      { subTitle: 'istyle株式会社', subText: '期間: 2024/7/1~2024/7/31', Content: 'to B向けのWebアプリの開発フルスタックエンジニアとして参加させていただきました。主に不具合対応、機能修正に関して取り組みました。特に難しかった業務としては、クエリ処理速度改善に関しての業務でした。現状のデータ出力の際のランタイムエラーになるデータ量から、処理速度を改善して何倍程度のデータ出力が可能になるかという調査を実施し、それに基づいてデータ抽出の処理を変更しました。この就業型インターンシップでチーム開発のフローやコミュニケーションの大切さ、プロダクトの背景を理解することなどエンジニアに必要な多くのことを知ることができました。'},
      { subTitle: 'Rakus Tech Lab', subText: '期間: 2024/7/23,25,8/1,8', Content: '4日間、期間3週間のハッカソンに参加しました。5人でチームを作り、それをもとに、チャットアプリという制約の下で開発を行いました。作ったサービスは、大学生の質問箱のようなアプリです。コンセプトとしては、同じ大学の人と匿名で質問をすることができるというものです。投稿、メモ、入室者人数カウント、画面内スクロールなどの機能を付与してあります。' },

    ];

    const Study = [
      { subTitle: '非常に重たい原子核の核構造に関しての研究', subText: '使用言語 : C言語', calcMethod: '用いた計算手法 : モンテカルロ法', Content: '近年、重量子のような地球上には存在しないほどの質量数をもつ原子核が、バブル型の構造をとるのではないかという仮説とトーラス型の構造をとるのではないかという2つの説が唱えられています。 そこで、原子核のエネルギーの算出方法として有名な手法の1つである、ベーテ・ワイチェッカーの半経験的質量公式を用いて簡易的な原子核モデルを考えて数値的にエネルギーを算出することにしました。' }
    ];

    const Skill = [
      { Language: 'HTML/CSS', Describe: '開発アルバイトにて使用,基本的な実装が可能' },
      { Language: 'JavaScript', Describe: '開発アルバイトにて使用,基本的な実装が可能' },
      { Language: 'jQuery', Describe: '開発アルバイトにて使用,基本的な実装が可能' },
      { Language: 'React', Describe: '個人開発にて使用,基本的な実装が可能' },
      { Language: 'Vue', Describe: '個人開発,ハッカソンにて使用,基本的な実装が可能'},
      { Language: 'Node', Describe: '個人開発にて使用,基本的な実装が可能'},
      { Language: 'Python', Describe: 'AtCoderコンテスト参加の際に使用,基本的な文法が使える' },
      { Language: 'C', Describe: '学部時代の研究での数値計算で使用(Gnplot等),基本的な文法が使える' },
      { Language: 'SQL', Describe: '開発インターンシップにて使用,クエリの高速化など対応' },
      { Language: 'PHP', Describe: 'Progateにて学習,基本的な文法が使える' },
    ];

    const LinkComponent = [
      { Service: 'GitHub', Account: 'fkatsuhiro', ServiceUrl: 'https://github.com/fkatsuhiro' },
      { Service: 'Qiita', Account: 'kakisaba', ServiceUrl: 'https://qiita.com/kakisaba'},
    ];

    return (
      <div>
        {/*<Page />*/}
        <div className='page'>
          <About />
          <br />
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
          <p className='midasi'>InternShip</p>
          {CareerContent.map((ContentItem) => {
            return (
              <Career subTitle={ContentItem.subTitle} subText={ContentItem.subText} Content={ContentItem.Content} />
            )
          })}
          <p className='midasi'>Study</p>
          {Study.map((ContentItem) => {
            return (
              <StudyContent subTitle={ContentItem.subTitle} subText={ContentItem.subText} calcMethod={ContentItem.calcMethod} Content={ContentItem.Content} />
            )
          })}
          <p className='midasi'>Skill Set</p>
          <div className='widthSkill'>
            <div className='row'>
              <div className='col-5 ContentOfSkill'>言語</div>
              <div className='col-7 ContentOfSkill'>習得レベル</div>
              {Skill.map((ContentItem) => {
                return(
                  <SkillContent Language={ContentItem.Language} Describe={ContentItem.Describe} />
                )
              })}
            </div>
          </div>
          <p className='midasi'>Link</p>
          <div className='widthSkill'>
            {LinkComponent.map((ContentItem) => {
              return(
                <LinkObject Service={ContentItem.Service} Account={ContentItem.Account} ServiceUrl={ContentItem.ServiceUrl} />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TopPage;
