import React from 'react'

export const Input = (props) => {

    const width = props.width || '100%'

    const inputStyle = {
        padding: '15px',
        width: width,
        border: '1px , solid, #ddd',
    }

    return(
        <input 
        type={props.type} 
        value={props.value} 
        onChangeText={props.onChangeText}
        style={inputStyle}
        />
    )
}
