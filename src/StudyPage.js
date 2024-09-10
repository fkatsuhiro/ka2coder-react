import React, {Component} from 'react';
import StudyContent from './StudyContent';
import './css/bootstrap.css';
import './css/main.css';

class StudyPage extends Component{
    render(){
        const Study = [
            { subTitle: '非常に重たい原子核の形状に関する研究(学部)', Content: '原子核はよりエネルギーが低い状態の構造をとります。先行研究では二つの立場があり、1つはバブル型の形状で、もう一方はトーラス型の構造をとるというものでした。本研究では簡易的なモデルで計算を行うため、ベーテ・ワイチェッカーの半経験的質量公式を用いました。計算に用いた言語はC言語です。本研究での難点としては、質量公式のクーロン項で積分の標識が用いられており、特定の点の計算で値が発散することです。そこで、プログラムを書く前に、発散する点を考えずに計算することはできないかという観点からC言語での積分計算手法を調べ、洗い出した結果モンテカルロ積分という手法を見つけその手法を用いて計算を行うことにしました。計算を進めるにあたってプログラムが複雑であるため、計算に時間がかかりすぎるという新たな難点に遭遇しました。この問題を解決するために、解析解を求めるというアプローチを用いました。バブル型の形状のエネルギーに関しては解析解を求めることが可能であることから、解析解を求め、それを利用して計算を行うことで、計算時間を大幅に短縮することができました。' },
            { subTitle: '生体ガスの高感度検出に関しての研究(大学院)', Content: '金属薄膜では、表面プラズモン共鳴という現象が起こります。この際に、薄膜から少し離れた空間の電場が増強されます。この電場が増強された位置に気体分子を吸着することができるように、金属薄膜にMOF(Metal Organic Framework)を付着させることで電場の増強した空間に期待を捕捉することができます。また、気体分子はC=O,O-H結合をもつ気体が特に赤外吸収が起きるためより高感度な検出が期待されます。' }
        ];

        return(
            <div>
                <div className='page'>
                    <p className='midasi'>Study</p>
                    <div>
                        { Study.map((StudyItem) => {
                            return(
                                <div className='mt-5'>
                                    < StudyContent subTitle={StudyItem.subTitle} Content={StudyItem.Content} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default StudyPage;