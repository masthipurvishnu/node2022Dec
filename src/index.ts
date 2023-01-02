import express from 'express'
import fetch from 'node-fetch'
import axios from 'axios'
import { STATUS_CODES } from 'http';
var app = express()
const server = app.listen(3000, () => {
    console.log(`\n----------* Server Started *--------`);
    console.log(`Server is running 'http://localhost:${3000}'`);
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

function call1() {
    setTimeout(() => {
        console.log('In')
    }, 4000)
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