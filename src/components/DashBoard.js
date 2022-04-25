import React, {useEffect} from 'react'
import InternetCard from './InternetCard.js'
import VolumeCard from './VolumeCard.js'
import SoundQuality from './SoundQuality.js'
import './app.css'

// class DashBoard extends React.Component {

//     state = { notifications: [] }

//     componentDidUpdate() {

//         if (!this.props.online) {this.setState({ notifications: [...this.state.notifications, 'Your application is offline. You wont be able to share or stream music to other devices.']})}
        
//          if (this.props.quality === 'low') {this.setState({ notifications: [...this.state.notifications, 'Music quality is degraded. Increase quality if your connection allows it.']})}
               
//          if (this.props.value >= 80) {this.setState({ notifications: [...this.state.notifications, 'Listening to music at a high volume could cause long-term hearing loss.']})}
//     }


//     render() {
//         return (
//                     <>
//                         <h1 className="dashboard-title">Welcome User</h1>
                       
//                         <main className="card-container">
//                             <InternetCard online={this.props.online} setOnline={this.props.setOnline} />
//                             <br />
//                             <VolumeCard value={this.props.value} setValue={this.props.setValue} />
//                             <br />
//                             <SoundQuality quality={this.props.quality} setQuality={this.props.setQuality} />
//                         </main>
                   
            
//                     <div className="notifications-container">
//                         <h4 className="notifications">Notifications: {this.state.notifications}</h4>
            
//                     </div>
                 
                       
//                     </>
//                 )
//     }
// }


const DashBoard = ({ online, setOnline, quality, setQuality, value, setValue }) => {

    
    const [notifications, setNotifications] = React.useState([])

    useEffect(() => {

        if (!online) {setNotifications([...notifications, 'Your application is offline. You wont be able to share or stream music to other devices.'])}
        
        if (quality === 'low') {setNotifications([...notifications, 'Music quality is degraded. Increase quality if your connection allows it.'])}
       
        if (value >= 80) {setNotifications([...notifications, 'Listening to music at a high volume could cause long-term hearing loss.'])}
    
    }, [online, quality, value])


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
       

        <div className="notifications-container">
            <h4 className="notifications">Notifications: <ul>{notifications.map((noti, index) => {return <li key={index}>{noti}</li>})}</ul></h4>

        </div>
     
           
        </>
    )
}

export default DashBoard