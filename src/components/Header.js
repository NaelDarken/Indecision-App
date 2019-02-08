
// Import React
import React from 'react'

const Header = props => (

    <header className="header">

        <div className="container">
        
            <h1 className="header__title">{props.appTitle}</h1>
            {props.suptitle && <h2 className="header__subtitle">{props.suptitle}</h2>}

        </div>

    </header>

)

Header.defaultProps = {

    appTitle: "Indecision App"

}

export default Header
