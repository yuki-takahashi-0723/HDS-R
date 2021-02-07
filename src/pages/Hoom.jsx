import React from 'react'
import styled from 'styled-components'
import { SelectButton } from '../questionItem'
import TopViewPhoto from '/Users/takahashiyuusei/HDS-R  var2/hdsr/src/img/wheelchair-3948122_1920.jpg'

const TopView = styled.div`
    height:100vh;
    background-image:url(${TopViewPhoto});
    background-size:cover;
    background-position:45% 10%; 
    position: relative;  
    color:#422525;
    font-family: "M PLUS 1p";
`

const Title = styled.h2`
    margin:0;
    position: absolute;
    top:30%;
    left:10px;
    @media (min-width:600px){
        font-size:50px;
    }  
`
const Message = styled.p`
    font-size:12px;
    margin:0;
    position: absolute;
    top:20%;
    left:20%;
    @media (min-width:600px){
        font-size:24px;
    }  
`
const ButtonWrap = styled.div`
    color:#ffff;
    position:absolute;
    top:90%;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    :hover{
        background-color: #59b1eb;
    }
    
`

const Hoom =({history})=>{

    const handleClick = () =>{
      history.push('/test')
    }

    return (
        <TopView>
            <Title>HDS-R　TEST</Title>
            <Message>登録不要。すぐに使えるシンプルなアプリ</Message>
            <ButtonWrap>
                <SelectButton
                    label={'START'}
                    color={'inherit'}
                    variant={'outlined'}
                    onClick={()=>handleClick()}
                />
            </ButtonWrap>
        </TopView>
    )
}

export default Hoom