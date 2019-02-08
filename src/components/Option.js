
// Import React
import React from 'react'

const Option = props => (

    <div className="option">

        <p className="option__title">{`${props.index}. ${props.content}`}</p>

            <button

            onClick= {() => props.delete(props.content)}
            className = "btn btn--link"

        >
            Remove

        </button>

    </div>

)
export default Option
