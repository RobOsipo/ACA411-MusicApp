import React from 'react'
import NavBar from './NavBar.js'
import TextField from './TextField.js'
import './app.css'



const App = () => {
    return (
       <main>
            <NavBar />
            <div className="form">
             <TextField />

            </div>
       </main>
    )
}


export default App;