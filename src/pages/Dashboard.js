import TinderCard from 'react-tinder-card'
import {useState} from 'react'
import MatchList from '../components/MatchList'

const Dashboard = () => {


    const db = [
        {
            name: 'Richard Hendricks',
            url: 'https://images.unsplash.com/photo-1656300510252-accc17174a69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://images.unsplash.com/photo-1656313826909-1f89d1702a81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Monica Hall',
            url: 'https://images.unsplash.com/photo-1654881076699-da94d14d9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Jared Dunn',
            url: 'https://images.unsplash.com/photo-1654881076699-da94d14d9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://images.unsplash.com/photo-1654881076699-da94d14d9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
    ]

    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }


    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    return (
       <div className="dashboard">
           <MatchList/>
           <div className="swipe-container">
               <div className="card-container">
                   {characters.map((character) =>
                       <TinderCard
                           className='swipe'
                           key={character.name}
                           onSwipe={(dir) => swiped(dir, character.name)}
                           onCardLeftScreen={() => outOfFrame(character.name)}>
                           <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                               <h3>{character.name}</h3>
                           </div>
                       </TinderCard>
                   )}
                   <div className="swipe-info">
                       { lastDirection ? <p> Tu as balayé à {lastDirection}</p> : <p/>}
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Dashboard