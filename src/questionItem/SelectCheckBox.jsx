import { Checkbox } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'


const LabelSpan = styled.span`
    font-size:3.3vw;

`

const SelectCheckBox = (props) => {
    return(
        <>
            <Checkbox
                color='primary'
                
                onChange={()=>props.onChange(props.point,props.state,props.id)}
            />
            <LabelSpan>{props.label}</LabelSpan>
        </>

    )
}

export default SelectCheckBox