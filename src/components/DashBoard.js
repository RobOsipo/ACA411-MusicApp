import React, {useEffect} from 'react'
import InternetCard from './InternetCard.js'
import VolumeCard from './VolumeCard.js'
import SoundQuality from './SoundQuality.js'
import './app.css'



const DashBoard = ({ online, setOnline, quality, setQuality, value, setValue }) => {
    
    
    const [notifications, setNotifications] = React.useState([])
    const [changeFlag, setChangeFlag] = React.useState(true)
    
    useEffect(() => {
        
        if (!online) {setNotifications([...notifications, 'Your application is offline. You wont be able to share or stream music to other devices.'])}
       
    }, [online]);

    useEffect(() => {
        if (quality === 'low') {setNotifications([...notifications, 'Music quality is degraded. Increase quality if your connection allows it.'])}
    }, [quality])

    useEffect(() => {
        if (value === 80) {setNotifications([...notifications, 'Listening to music at a high volume could cause long-term hearing loss.'])}
    }, [value])
    

    return (
        <>
            <h1 className="dashboard-title">Welcome User</h1>
           
            <main className="card-container">
                <InternetCard online={online} setOnline={setOnline} setChangeFlag={setChangeFlag} />
                
                <VolumeCard value={value} setValue={setValue} setChangeFlag={setChangeFlag} />
               
                <SoundQuality quality={quality} setQuality={setQuality} setChangeFlag={setChangeFlag} />
            </main>
       

        <div className="notifications-container">
            <h4 className="notifications">Notifications: <ul>{notifications.map((noti, index) => {return <li key={index}>{noti}</li>})}</ul></h4>

        </div>
     
           
        </>
    )
}

export default DashBoard
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