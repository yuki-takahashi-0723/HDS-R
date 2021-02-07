import React, { useCallback, useState } from 'react'
import { Counter, MiniSpacer, SelectButton, SelectCheckBox} from '../questionItem'
import Result from './Result'
import {data} from '.././data'
import styled from 'styled-components'


const TestWrap = styled.div`
    height:117vh;
    background: radial-gradient(#F2B9A1, #EA6264);
    font-family: "M PLUS 1p";
    color:#FFFF;
    padding:0 10px 0 10px;
    position: relative;
   
`
const Question = styled.h2`
    display:flex;
    justify-content:center;
    margin:0;
    font-size:5vw;
    @media (min-width:600px){
        font-size:4vw;
    }
`
const QuestionSub = styled.p`
    margin: 0;
    font-size:15px;
    display:flex;
    justify-content:center;
`
const AnserAlea = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`
const NextQuestionButton = styled.div`
    text-align:center;
`




const Test = ({history}) => {
    const [questionCount,setQuestionCount]=useState(0)
    const questionItem = data[questionCount]
   
    const LastQuestionPattern = (questionCount !== 9)
    const SwitchPattern = (questionCount === 0 ||questionCount=== 2 || questionCount === 4 || questionCount === 8)
    const question = questionItem.Question
    const subComent = questionItem.subComent
    const selecters = questionItem.selecter
   const [total,setTortal]= useState(0)
   const [displayResult,setDisplayResult]=useState(false)
   
   const SelectButtonClick = (point) => {
       setQuestionCount(questionCount + 1)
       setTortal(total + point)
    }
    
    const handleCheck = (point,state,id) =>{
        selecters.map(selecter=>{
            if(selecter.id === id){
                selecter.state=!state
                if(selecter.state === true){
                    setTortal(total + point)
                }else if(selecter.state === false)
                setTortal( total - point)
            }
            return selecter
        })
    }
    
    const handleClick = ()=> {
        setQuestionCount(questionCount + 1)
        
    }
    const [count,setCount]=useState(0)
    const counterChange = useCallback((e) =>{
        setCount(e.target.value)
    },[setCount])

    const ResultGo = () =>{ 
        if(count === '6' ){
            setTortal(total + 1)
        }
        else if(count === '7'){
           setTortal(total + 2)
        }
        else if(count === '8'){
            setTortal(total + 3)
        }
        else if(count === '9'){
            setTortal(total + 4)
        }
        else if(count === '10'){
            setTortal(total + 5)
        }  
        setDisplayResult(true)
    }
    return(
        <>
            {
                !displayResult && (
                    <TestWrap>
                            <MiniSpacer/>
                            <Question>{question}</Question>
                            <QuestionSub>{subComent}</QuestionSub>
                            {
                                LastQuestionPattern ?
                                <>
                                    {
                                        SwitchPattern ? 
                                        <AnserAlea>
                                            {
                                                selecters.map((selecter,index)=>
                                                <div>
                                                    <SelectButton
                                                        variant = {'contained'}
                                                        color = {'secondary'}
                                                        label={selecter.text}
                                                        key={index.toString()}
                                                        onClick={()=>SelectButtonClick(selecter.point)}
                                                        style={{width: '80vw', height: '10vh' }}
                                                    />
                                                    <MiniSpacer/>
                                                </div>
                                                
                                                )
                                            }
                                        </AnserAlea>
                                        :
                                        <>
                                        <MiniSpacer/>
                                        <MiniSpacer/>
                                            {
                                                selecters.map((selecter,index)=>
                                                <div>
                                                    <SelectCheckBox
                                                        label={selecter.text}
                                                        key={selecter.id}
                                                        onChange={handleCheck}
                                                        point={selecter.point}
                                                        state={selecter.state}
                                                        id={selecter.id}
                                                    />
                                                </div> 
                                                )
                                            }
                                            <NextQuestionButton>
                                                <SelectButton
                                                    label='次の問題へ'
                                                    onClick={()=>handleClick()}
                                                    variant = {'contained'}
                                                    color = {'secondary'}
                                                    
                                                />
                                            </NextQuestionButton>
                                        </>
                                    }
                                </>
                                :
                                <AnserAlea>
                                    <Counter
                                        value={count}
                                        onChange={counterChange}
                                    />
                                    <MiniSpacer/>
                                    <SelectButton
                                                label='テストを終了し、診断結果へ'
                                                onClick={()=>ResultGo()}
                                                variant = {'contained'}
                                                color = {'secondary'}
                                    />
                                </AnserAlea>
                            }
                    </TestWrap>
                )
            }
            {
                displayResult && (
                    <Result
                        hitory={history} 
                        total={total}
                        
                    />
                )
                
            }


        </>
    )
}

export default Test