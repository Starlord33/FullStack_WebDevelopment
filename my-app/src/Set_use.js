//Set name and address using useState hook

// import './App.css'

// import React, { useState } from 'react'

// const App = () => {

//   const [name, setName] = useState('Bhargav')
//   const [address, setAddress] = useState('RR Nagar')

//   const handleClick = () => {
//     console.log('Button Clicked')
//     setName(`${name} P Raj`)
//     setAddress('Kengeri')
//   }
//   return (
//     <div>
//     <h1>Hello {name}</h1>
//     <h2>Address {address}</h2>
//     <button onClick={handleClick}>Change</button>
//     </div>
//   )
// }

// export default App;


//Increrement and Decrement using useState hook

import './App.css'

import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count => count + 1)
    setCount(count => count + 1) //Updater function

  }

  const handleDecrement = () => {
    count > 0 ? setCount(count => count - 1) : setCount(0)
    }

  return (
    <div>
    
    <button onClick={handleIncrement}>+</button>
    {' '}{count} {' '}
    <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App;
