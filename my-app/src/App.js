import './App.css'  
import React, { useState } from 'react'
import Display from './Display'

const App = () => {
    const [name, setName] = useState('Bhargav')
    const handleClick = (newName) => {
        setName(`${name} ${newName}`)
    }

    return <>
    <h1>Hello {name}</h1>
    <Display handleClick={handleClick}/>
    </>
}

export default App;