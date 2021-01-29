import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import CardModel from './cardsSchema.js'
import Cors from 'cors'

// express config

const app = express()
const port = process.env.PORT || 3001

// dotenv config

dotenv.config()

// Middlewares

app.use(express.json())
// cors adding header for security reasons
app.use(Cors())

// MongoDB config

try{

const uri = process.env.URI_DB_CONNECTION
    mongoose.connect(uri, 
        {
            useNewUrlParser : true , 
            useCreateIndex: true , 
            useUnifiedTopology: true
        }
        )
        console.log('Connection Success'.blue.underline)
}
catch(error){
    console.log('Connection To Database Faild'.red.underline)
}

// API EndPoints

app.get('/' , (req , res) => {

    res.status(200).send('HELLO PROGRAMMERS') 

})

app.post('/tinder/cards' , async (req , res)=>{
    const cardInfo = req.body 
    
   await CardModel.create(cardInfo).then((message) =>{
       console.log(message)
       res.json(message)
}).catch((message) =>{
    
    console.log(message)
    res.json(message)
})


})
 

app.get('/tinder/cards' , async (req , res)=>{


       
     const  data =  await CardModel.find({}).then((message) =>{
         
        console.log(message)
        res.json(message)
    }).catch((message) =>{
        console.log(message)
        res.json(message)
    })

       
    
   

        
            
        

})




// listener

app.listen( port , () =>{console.log(`Connecting Localhost : ${port}`.green.underline)})