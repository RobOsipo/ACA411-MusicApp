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
              <div className="notifs">

                  {online === false && <p className="noti">Your application is offline. You wont be able to share or stream music to other devices.</p>}
                  {quality === 'low' && <p className="noti">Music quality is degraded. Increase quality if your connection allows it.</p>}
                  {value >= 80 && <p className="noti">Listening to music at a high volume could cause long-term hearing loss.</p>}
               </div>
            </div>
       </main>
    )
}


export default App;