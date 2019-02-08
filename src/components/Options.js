
// Import React
import React from 'react'

// Import option comonent
import Option from './Option'

const Options = props => (

    <div>
        
        <div className="widget__header">

            <h3 className="widget__header--title">Your Options</h3>

            <button

                onClick = {props.deleteAllBtn}
                className = "btn btn--link"

            >
                Remove All

            </button>

        </div>

        {props.options.length === 0 && <p className="widget__message">Please add just one option to get started!</p>}

        {
            props.options.map((option, index) =>

                <Option

                    index = {index + 1}
                    key = {option}
                    content = {option}
                    delete = {props.deleteBtn}

                />

            )
        }

    </div>


)

export default Options
