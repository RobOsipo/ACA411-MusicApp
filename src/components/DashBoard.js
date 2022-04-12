import React from 'react'
import InternetCard from './InternetCard.js'
import VolumeCard from './VolumeCard.js'
import SoundQuality from './SoundQuality.js'
import './app.css'



const DashBoard = ({notifications}) => {

    const [newNotifications, setNewNotifications] = React.useState(notifications)

    return (
        <>
            <h1 className="dashboard-title">Welcome User</h1>
            <main className="card-container">
                <InternetCard />
                <br />
                <VolumeCard />
                <br />
                <SoundQuality />
            </main>

        </>
    )
}

export default DashBoard