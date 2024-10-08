import React, {Component} from 'react';
import CareerCollage from './CareerCollage';
import Career from './Career';
import faceUrl from './images/face.jpg';
import SummerIntern from './SummerIntern';
import './css/bootstrap.css';
import './css/main.css';

class CareerPage extends Component{
    render(){
        const CareerContent = [
            { subTitle: 'SAMURAI株式会社', subText: '期間: 2022/8~2023/7', Content: 'QAエンジニアとして、自社開発のアプリケーションにおける新規機能の追加などのプロジェクトに携わりました。実装された機能が、テスト環境で正常に動作するかどうかを確認する役割を担いました。作成するテスト項目がもれなく、 重複しないように、綿密なテストケースを作成し、実行しました。この業務を通して、正確で効率的なテストケースの書き方や、バグの特定・修正の方法を習得しました。さらに、現役のエンジニアの方との密接なコミュニケーションを通じて、実装からテストまでプロジェクトを円滑に進めることができました。' },
            { subTitle: 'Inspiration株式会社', subText: '期間: 2023/9~2024/2', Content: '開発のポジションで業務に携わりました。 自社開発のアプリケーションのデザイン修正や新規HPの実装を主に担当しました。日々の業務では、1日に1回程度、エンジニアの方とコミュニケーションを取りながら業務の進捗状況や課題について相談し、アドバイスをいただきました。 この経験を通じて、コードの可読性やCSSの命名規則など、個人プロジェクトと業務でのコーディングの違いを学びました。' }
        ];

        const CareerCollageText = [
            { Text: '2017/4 三重県立四日市高等学校 普通科 入学'},
            { Text: '2020/3 三重県立四日市高等学校 普通科 卒業'},
            { Text: '2020/4 千葉大学 理学部 物理学科 入学'},
            { Text: '2024/3 千葉大学 理学部 物理学科 卒業'},
            { Text: '2024/4 東京大学大学院 工学系研究科 バイオエンジニアリング専攻 入学'},
            { Text: '2024/9/4 外資就活1on1面談イベント選抜'},
            { Text: '2024/9/14 サポーターズ1on1イベント(ハイクラス)選抜'},
            { Text: '2024/10/19 Vue Fes Japan 2024スタッフ'},
        ];

        const SummerInternComponent = [
            { CompanyName: 'istyle株式会社', SpanForInternShip: '2024/7/1~7/31 (1カ月就業型)', PositionOfIntern: 'フルスタック', UseLanguage: 'Vue.js, PHP, GO, SQL', Content: 'to B向けのWebアプリの開発フルスタックエンジニアとして参加させていただきました。主に不具合対応、機能修正に関して取り組みました。特に難しかった業務としては、クエリ処理速度改善に関しての業務でした。現状のデータ出力の際のランタイムエラーになるデータ量から、処理速度を改善して何倍程度のデータ出力が可能になるかという調査を実施し、それに基づいてデータ抽出の処理を変更しました。この就業型インターンシップでチーム開発のフローやコミュニケーションの大切さ、プロダクトの背景を理解することなどエンジニアに必要な多くのことを知ることができました。', url: 'istyle'},
            { CompanyName: 'ラクス株式会社', SpanForInternShip: '2024/7/23.25,8/1,8', PositionOfIntern: 'フロント', UseLanguage: 'Vue.js, SQL', Content: '4日間、期間3週間のハッカソンに参加しました。5人でチームを作り、それをもとに、チャットアプリという制約の下で開発を行いました。作ったサービスは、大学生の質問箱のようなアプリです。コンセプトとしては、同じ大学の人と匿名で質問をすることができるというものです。投稿、メモ、入室者人数カウント、画面内スクロールなどの機能を付与してあります。', url: 'Rakus'},

        ]

        return(
            <div>
                <div className='page'>
                    <p className='midasi'>Career</p>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='image' src={faceUrl} />
                        </div>
                        <div className='col-md-8'>
                            {CareerCollageText.map((CareerItem) => {
                                return(
                                    < CareerCollage Text={CareerItem.Text} />
                                )
                            })}
                            <div className='padding-bottom'></div>
                        </div>
                    </div>
                </div>
                {/* Long span Internship Experience */}
                <div className='long-span-internship-background'>
                    <p className='padding-bottom long-span-internship-title'>Long Internship</p>
                    <div className='long-span-internship'>
                    {CareerContent.map((CareerItem) => {
                        return(
                            < Career subTitle={CareerItem.subTitle} subText={CareerItem.subText} Content={CareerItem.Content} />
                        )
                    })}
                    </div>
                </div>
                {/* Summer Intern Ship Experience */}
                <div className='summer-internship-background'>
                    <p className='padding-bottom long-span-internship-title'>Summer Internship</p>
                    <div className='summer-internship'>
                    {SummerInternComponent.map((SummerInternContent) => {
                        return (
                            < SummerIntern CompanyName={ SummerInternContent.CompanyName } SpanForInternShip={ SummerInternContent.SpanForInternShip } PositionOfIntern={ SummerInternContent.PositionOfIntern } UseLanguage={ SummerInternContent.UseLanguage } Content={ SummerInternContent.Content } url={ SummerInternContent.url} />
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CareerPage;