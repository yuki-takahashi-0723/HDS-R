import React from 'react'
import styled from 'styled-components'

const DaialInput =styled.input`
    width:100px;
   
`



const Counter = (props) =>{
    return(
        <DaialInput
            value={props.value} 
            type='number'
            min={0}
            max={10}
            onChange={(e)=>props.onChange(e)}
        />
    )
}

export default Counter