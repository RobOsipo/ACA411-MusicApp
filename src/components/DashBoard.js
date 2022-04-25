import React from 'react'
import InternetCard from './InternetCard.js'
import VolumeCard from './VolumeCard.js'
import SoundQuality from './SoundQuality.js'
import './app.css'



const DashBoard = ({ online, setOnline, quality, setQuality, value, setValue }) => {

    console.log('value', value)
    const [notifications, setNotifications] = React.useState([])

    return (
        <>
            <h1 className="dashboard-title">Welcome User</h1>
           
            <main className="card-container">
                <InternetCard online={online} setOnline={setOnline} />
                <br />
                <VolumeCard value={value} setValue={setValue} />
                <br />
                <SoundQuality quality={quality} setQuality={setQuality} />
            </main>
           
        </>
    )
}

export default DashBoard