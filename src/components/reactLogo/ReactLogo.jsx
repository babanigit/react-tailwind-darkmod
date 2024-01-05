

import logo from './logo.svg';
import './ReactLogo.css';
import React from 'react'

const ReactLogo = (props) => {
    const theme = props.theme
    return (
        <>
            <div className="App" >
                <header className="App-header" style={{background:theme.body}} >
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>

        </>
    )
}

export default ReactLogo