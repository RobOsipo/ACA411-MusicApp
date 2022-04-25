import React from 'react'
import NavBar from './NavBar.js'
import TextField from './TextField.js'
import './app.css'



const App = () => {

    const [online, setOnline] = React.useState(true)
    const [quality, setQuality] = React.useState('')
    const [value, setValue] = React.useState(30);


    return (
       <main>
            <NavBar />
            <div className="form">
             <TextField 
                online={online}
                setOnline={setOnline}
                quality={quality}
                setQuality={setQuality}
                value={value}
                setValue={setValue}

              />

            </div>
       </main>
    )
}


export default App;