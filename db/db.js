require("dotenv").config()
const mongoose =require('mongoose')

const dbConnect= async ()=>{

    try {
        const URL = `mongodb://admin:admin123@react-scheduler-shard-00-00.rdu3b.mongodb.net:27017,react-scheduler-shard-00-01.rdu3b.mongodb.net:27017,react-scheduler-shard-00-02.rdu3b.mongodb.net:27017/react-scheduler?ssl=true&replicaSet=atlas-1krwiv-shard-0&authSource=admin&retryWrites=true&w=majority`;
        await  mongoose.connect(URL, { useUnifiedTopology:true, useNewURLParser:true })
        console.log("Database is connected")
    }

    catch(error) {
        console.log("Database is not connected, Please Try Again",error)
    }
     
}

module.exports= dbConnect;

