import { Button } from '@material-ui/core'
import React from 'react'

const SelectButton = (props) => {
    return(
        <Button
            
            variant={props.variant}
            color={props.color}
            label={props.label}
            onClick={()=>props.onClick()}
            style={props.style}
        >
            {props.label}
        </Button>

    )
}

export default SelectButton