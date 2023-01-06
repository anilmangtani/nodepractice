const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{
    res.send("Server is running on "+PORT);
})

app.get('/number',(req, res)=>{
    res.send("" + Math.random(0));
})

app.post('/create',(req,res)=>{
    console.log(req.body);
    res.send("User again");
})


app.listen(PORT, ()=>{
    console.log("Server is running on "+ PORT);
});