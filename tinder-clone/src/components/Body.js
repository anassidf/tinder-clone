import './body.css'
import React , {useState , useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import axios from '../axios'


 const Body = () => {

    
const  [ people , setpeople ] = useState([])

useEffect(()=>{

const fetch =  async ()=>{

const cards = await axios.get('/tinder/cards')

setpeople(cards.data)
}

fetch()

} , [])


const swiped = (direction , name) => {
 console.log(`Rejecting ${name} direction : ${direction}`)
}
const outOfFrame = (name) => { console.log(`${name} is leaving` )}

    return (
        <div className = 'tinder_cards'>
           <div className = 'tinder_cards_container'>
        { people.map((person) => (
            <TinderCard
            className = 'swipe'
            key = {person.name}
            preventSwipe={[ 'up', 'down' ]}
            onSwipe = {(dir) => swiped(dir , person.name)}
            onCardLeftScreen= {() => outOfFrame(person.name)}>


          {/* remember : the issio that i face in background image and it was about (cover the block ...etc ) if any thing about css goes wrong check any inline styling it will be there here it was th background (inline) so every thing about image should be inline as well */}

            <div className = 'card' style= {{
                                                background: `url(${person.imageURL})`  ,
                                                backgroundRepeat:'no-repeat' ,
                                                backgroundSize: 'cover' , 
                                                backgroundPosition : 'center'
                                                                                           }} >

            <h3 className= 'card_name'>{person.name}</h3>

            </div>




            </TinderCard>

        ))}
        
        </div>
        </div>
    )
}
export default Body