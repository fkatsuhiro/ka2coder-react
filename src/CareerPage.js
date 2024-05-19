import React, {Component} from 'react';
import CareerCollage from './CareerCollage';
import Career from './Career';
import faceUrl from './images/face.jpg';
import './css/bootstrap.css';
import './css/main.css';

class CareerPage extends Component{
    render(){
        const CareerContent = [
            { subTitle: 'SAMURAI株式会社', subText: '期間: 2022/8~2023/7', Content: 'QAエンジニアとして、自社開発のアプリケーションにおける新規機能の追加などのプロジェクトに携わりました。実装された機能が、テスト環境で正常に動作するかどうかを確認する役割を担いました。作成するテスト項目がもれなく、 重複しないように、綿密なテストケースを作成し、実行しました。この業務を通して、正確で効率的なテストケースの書き方や、バグの特定・修正の方法を習得しました。さらに、現役のエンジニアの方との密接なコミュニケーションを通じて、実装からテストまでプロジェクトを円滑に進めることができました。' },
            { subTitle: 'Inspiration株式会社', subText: '期間: 2023/9~2024/2', Content: '開発のポジションで業務に携わりました。 自社開発のアプリケーションのデザイン修正や新規HPの実装を主に担当しました。日々の業務では、1日に1回程度、エンジニアの方とコミュニケーションを取りながら業務の進捗状況や課題について相談し、アドバイスをいただきました。 この経験を通じて、コードの可読性やCSSの命名規則など、個人プロジェクトと業務でのコーディングの違いを学びました。' }
        ];

        const CareerCollageText = [
            { Text: '2020/4 国立法人千葉大学 入学'},
            { Text: '2024/3 国立法人千葉大学 卒業'},
            { Text: '2024/4 国立法人東京大学 入学'},
        ];

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
                                    <CareerCollage Text={CareerItem.Text} />
                                )
                            })}
                            {CareerContent.map((CareerItem) => {
                                return(
                                    <Career subTitle={CareerItem.subTitle} subText={CareerItem.subText} Content={CareerItem.Content} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CareerPage;