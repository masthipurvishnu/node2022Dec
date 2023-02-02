import express from "express";
var app = express()
const PORT = '3100'
const server = app.listen(PORT, () => {
    console.log(`Server listning from port ${PORT}..`, server.address())
})

app.get('/', (req, res) => {
    console.log('Request has been received. ', JSON.stringify(req.url)) // How to do coma coma variable like
    res.send(`Your request has been received...!`)
})

app.get('/users', (req, res) => {
    console.log(`Request url '${req.url}'`)
    res.send('Your request has been received, will send you the users list soon..!')
})