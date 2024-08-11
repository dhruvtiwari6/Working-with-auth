require('dotenv').config()

const express = require('express');
const app = express();

const cors = require('cors');




app.use(express.json())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

const {connectDb} = require('./DB/connection.js')
connectDb();

const {router} = require('./staticRoute/route.js')
app.use('/api', router);
app.get('/', (req, res) => {
   res.send('<h1>how are you</h1>')
})

app.listen(8000, ()=> {console.log("app is listening at port" )});
