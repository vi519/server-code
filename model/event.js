const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    start:{type:Date},
    end:{type:Date},
    title:{type:String},

    extendedProps: {
        taskId:{type:String},
        reservationId:{type:String},
        orgId:{type:String},
        location:{type:String},
        subject:{type:String},
        audioRequired:{type:Boolean},
    }
  
})

const eventModel = mongoose.model('EventData',EventSchema);

module.exports=eventModel;