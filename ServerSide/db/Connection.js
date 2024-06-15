const mongoose = require("mongoose")
const DB=process.env.DATABASE


mongoose.connect(DB).then(()=>console.log('database connect')).catch((error)=> console.log(error.message))