const connectToMongo = require('./database/connectivity')
const express = require('express')
const app = express();
const port = 3000;
connectToMongo();

// app.use('/api/auth' , )

app.listen(port , () =>{
    console.log("App listening on port: " , port);
})
