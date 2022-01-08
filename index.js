
const express = require('express');
const dbConnect =require('./db/db.js');
const cors = require('cors')
const eventModel = require('./model/event.js')
//const moment = require('moment')
require('dotenv').config()



const app =express();
dbConnect();

app.use(express.json());

app.listen(process.env.PORT || 5000,()=>console.log(`server running at`))
app.use(cors())



app.get('/get-event',async(req,res)=>{
const events = await eventModel.find();
res.json(events)
console.log(events)
})

app.post('/create-event',async(req,res)=>{
    const event = eventModel(req.body)
    await event.save();

    res.sendStatus(202);  
    })
//app.use('/api/calendar',require('./controller/calendarController.js'))





