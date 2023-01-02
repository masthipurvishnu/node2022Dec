import express from "express";
var app = express()

const server = app.listen(3002, () => {
    console.log(`Server listning from port ${3002}..`, server.address())
})

app.get('/', (req, res) => {
    console.log('Request has been received. ', JSON.stringify(req.url)) // How to do coma coma variable like
    res.send(`Your request has been received...!`)
})

app.get('/users', (req, res) => {
    console.log(`Request url '${req.url}'`)
    res.send('Your request has been received, will send you the users list soon..!')
})