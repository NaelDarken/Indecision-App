
// Import React
import React from 'react'

// Form Component
class Form extends React.Component {

    constructor(props) {

        super(props)
        
        this.add = this.add.bind(this)

        this.state = {

            error: undefined

        }

    }

    add(event) {

        event.preventDefault()

        const option = event.target.elements.option.value.trim()

        const error = this.props.addBtn(option)

        this.setState(() => ({ error }))
        
        !error ? event.target.elements.option.value = "" : error

    }

    render() {

        return (

            <div className="form">

                {this.state.error && <h3 className="form__error">{this.state.error}</h3>}

                <form onSubmit={this.add} className="form__content">

                    <input type="text" name="option" className="form__content--input" />

                    <button className="btn">Add Option</button>

                </form>

            </div>

        )

    }

}

// Export our component
export {

    Form as default
    
}
