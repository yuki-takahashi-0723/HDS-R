import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MiniSpacer, SelectButton } from '../questionItem'

const ResultWrap = styled.div`
    height:100vh;
    background: radial-gradient(#F2B9A1, #EA6264);
    font-family: "M PLUS 1p";
    color:#FFFF;
    padding:0 10px 0 10px;
    
    `
const TestResult = styled.h1`
    margin: 0 ;
    text-align:center;
`
const PointResult = styled.h2`
    text-align:center;
`
const TopBackButton = styled.div`
    text-align:center;
`

const Result = ({total,hitory}) => {
    const [resultContent,setResultContent]=useState('')  
    useEffect(()=>{
        if(total<10){
            setResultContent('重度の認知症の恐れがあります。然るべき医療機関を受診し、再検査をおすすめします。')
        }else if(total<15){
            setResultContent('中度の認知症の恐れがありますので然るべき医療機関への受診をおすすめします')
        }else if(total<20){
            setResultContent('軽度の認知症の疑いがあります。然るべき医療機関にて再検査をおすすめします')
        }else if(total<30){
            setResultContent('認知症の可能性は低く,健常者と同等の点数です。')
        }
    },[total])
    return(
        <ResultWrap>
            <TestResult>診断結果</TestResult>
            <MiniSpacer/>
            <PointResult>得点は{total}点</PointResult>
            <MiniSpacer/>
            <p>{resultContent}</p>
            <TopBackButton>
                <SelectButton
                    variant = {'contained'}
                    color = {'secondary'}
                    label = {'トップ画面に戻る'}
                    onClick={()=>hitory.push('/')}
                />
            </TopBackButton>
        </ResultWrap>
    )
}

export default Result