import express from 'express'
import fetch from 'node-fetch'
import axios from 'axios'
import { STATUS_CODES } from 'http';
import cors from 'cors'
import buildReader, { readable } from './Stream/buildReader';
import { log } from 'console';

import * as fs from 'fs'
import './Mongo/connect';
import { movies } from './Mongo/connect';
// import http from 'http'
// import { Server } from 'socket.io'
var app = express()
// const http = require('http').Server(app);

const PORT = '3100'
app.use(cors({
    origin: 'http://localhost:3000'
}))

const server = app.listen(PORT, () => {
    console.log(`\n----------* Server Started *--------`);
    console.log(`Server listning from port ${PORT}..`, server.address())
})
app.get('/socketio', (req, res) => {
    console.log('123456', __dirname);
    res.sendFile(__dirname + '/Stream/index.html')
})

app.get('/', async (req, res) => {
    console.log(`Request - '${req.hostname}'`);
    // const details = getZipCodeDetails(2)
    // console.log('12-', details);
    // res.send(details)

    const response = await fetch('https://api.zippopotam.us/us/75024')
    const data = await response.json()
    res.send(data)

})
app.get('/movies', (req, res) => {
    movies().then(d => {
        log('movies request -', JSON.stringify(d))
        res.send(d)
    }).catch(e => {
        log('eee -', e)
        res.send(e.message)
    })
})
// CHECK THIS LATER
app.get('/build', async (req, res) => {
    log(1)
    let i = 0
    for await (const chunk of readable) {
        log('==================================================', i); i++
        // log(chunk)
        res.send(chunk)
    }
})
app.get('/readfile', async (req, res) => {
    fs.readFile('temp/test.txt', (err: any, data: any) => {
        if (err) throw err
        log('11111111111111111111', data)
        res.send(data)
    })
})
app.get('/readstream', async (req, res) => {
    log('22222222222222222')
    const rf = fs.createReadStream('temp/test.txt')
    rf.pipe(res)
})

app.get('/build1', async (req, res) => {
    let data: string = ''
    let readerStream: fs.ReadStream = fs.createReadStream('temp/test.txt')
    readerStream.setEncoding('utf-8')
    readerStream.on('data', (chunk) => {
        data += chunk
        log(chunk)
        log('')
        log('')
        log('444444444444444444444444444')
        log('')
        log('')
        res.send(chunk)
    })
    readerStream.on('end', () => {
        log(data)
    })

    readerStream.on('error', (err) => {
        log('vv1 - ', err.stack)
    })
    log('program')
})
app.get('/todos', (req, res) => {
    console.log(`Request - ${req.hostname}`);
    const details = getTodos()
    res.send(details)

})
app.post('/todos/create', (req, res) => {

    res.send({ message: 'success' })
})

const getTodos = () => {
    return ([
        {
            "id": 1,
            "text": "Learn NestJS",
            "active": true,
            "done": false
        },
        {
            "id": 2,
            "text": "Learn GraphQL",
            "active": true,
            "done": false
        },
        {
            "id": 3,
            "text": "Learn Apollo",
            "active": true,
            "done": false
        },
        {
            "id": 4,
            "text": "Learn TypeScript",
            "active": true,
            "done": false
        },
        {
            "id": 5,
            "text": "Learn React",
            "active": true,
            "done": true
        },
        {
            "id": 6,
            "text": "Learn Redux",
            "active": true,
            "done": true
        },
        {
            "id": 7,
            "text": "Learn React Query",
            "active": true,
            "done": false
        },
        {
            "id": 8,
            "text": "Learn Vue",
            "active": true,
            "done": false
        },
        {
            "id": 9,
            "text": "Learn AWS",
            "active": true,
            "done": false
        },
    ])
}

const getZipCodeDetails1: any = async (zipcode: number) => {
    const details = await fetch('https://api.zippopotam.us/us/75024')
        .then((res: any) => {
            console.log('1111111111111111111');
            return res.json()
        }).then((data: any) => {
            console.log('asdfasdfasdfasdfasdfasdfasdfasdfasdf')
            // Promise.resolve(data)
            return data
        })
    console.log('asdfasdfasdf-');
    console.log(details);
    return details
}

async function getZipCodeDetails(zipcode: number) {
    console.log(1);
    const res = await fetch('https://api.zippopotam.us/us/75024')
    const data = await res.json()
    console.log('12');
    console.log('12-', data);
    return data

}
// HELLO PUNIT