
// Import React
import React from 'react'

// Import our components
import Header from './Header'
import Actions from './Actions'
import Options from './Options'
import Form from './Form'
import OptionModal from './OptionModal'

// Global Component
class App extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            options: [],

            selectedOption: undefined

        }

        // Global Methods
        this.deleteOptions = this.deleteOptions.bind(this)
        this.makeDecision = this.makeDecision.bind(this)
        this.addOption = this.addOption.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    // LifeCycle Methods
    componentDidMount() {

        try {

            const data = JSON.parse(window.localStorage.getItem('options'))
        
            if (data) {

                this.setState(() => ({

                    options: data
        
                }))

            }

        } catch (error) {

            console.log(error)

        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {

            const data = JSON.stringify(this.state.options)
            window.localStorage.setItem('options', data)

        }

    }

    componentWillUnmount() {

        console.log("Will unmount!")

    }

    // Delete All Options
    deleteOptions() {

        this.setState(() => ({

            options: []

        }))

    }

    // Make a Decision
    makeDecision() {
        
        const index = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[index]

        // Show modal
        this.setState({

            selectedOption: option

        })

    }

    // Close Modal
    closeModal() {

        this.setState({

            selectedOption: undefined

        })

    }

    // Add an Option
    addOption(option) {
        
        if (!option) {

            return "Please type your option!"

        } else if (this.state.options.indexOf(option) > -1) {

            return "Don't duplicate an option!"

        } else if (option) {

            this.setState(currentValue => ({

                options: currentValue.options.concat(option)
                
            }))

        }


    }

    // Delete One Option
    deleteOption(chosenOpt) {

        this.setState(currentValue => ({

            options: currentValue.options.filter(option => chosenOpt !== option)

        }))

    }

    // Render Component
    render() {

        const suptitle = "Put your life in the hands of computer!"

        return (

            <div>

                <Header

                    suptitle = {suptitle}

                />

                <div className="container">
                
                    <Actions

                        hasOptions = {this.state.options.length === 0}
                        makeDecision = {this.makeDecision}

                    />

                    <div className="widget">

                        <Options

                            options = {this.state.options} 
                            deleteAllBtn = {this.deleteOptions}
                            deleteBtn = {this.deleteOption}

                        />

                        <Form

                            addBtn = {this.addOption}

                        />

                    </div>

                    <OptionModal

                        selectedOption = {this.state.selectedOption}
                        closeOption = {this.closeModal}

                    />

                </div>

            </div>

        )

    }

}

export default App
