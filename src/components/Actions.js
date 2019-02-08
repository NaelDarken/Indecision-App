
// Import React
import React from 'react'

const Actions = props => (

    <button

        onClick = {props.makeDecision}

        disabled = {props.hasOptions}
        
        className = "big-btn"
                
    >
        What should i do?!

    </button>

)

export default Actions
