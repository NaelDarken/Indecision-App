
// Import React
import React from 'react'
import Modal from 'react-modal'

// Modal component
const OptionModal = props => (
    
    <Modal
    
        isOpen = {!!props.selectedOption}

        onRequestClose = {props.closeOption}

        contentLabel = "Modal Title"
        
        ariaHideApp = {false}

        closeTimeoutMS = {400}

        className = "popup"

    >

        <h1 className="popup__head">Selected Option</h1>
        <p className="popup__body">{props.selectedOption}</p>
        <button className="btn" onClick = {props.closeOption}>Submit</button>

    </Modal>

)

// Export our component
export default OptionModal
