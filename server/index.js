const express = require('express')    
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const port = 3000;

mongoose.connect("mongodb://localhost:27017/testassign",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const logSchema = new mongoose.Schema({
    level: String,
    message: String,
    resourceId: String,
    timestamp: String,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
      parentResourceId: String
    }
  });
  const Log = new mongoose.model("Log", logSchema);

// Define a GET endpoint
app.post('/api/insert', (req, res) => {
    Log.insertMany([req.body])
  res.json("inserted successfully")
});

app.post('/api/find', async(req, res) => {
    const file= req.body
    console.log(file)
    const filt={}
    for (const i in file)
    {
        if(file[i].enabled==true)
        filt[i]=file[i].value

    }
    console.log(filt)
    const k= await Log.findOne(filt)
    if(k)
    console.log(k)
    else
    console.log("not find any mc here")
    res.json(k)
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
