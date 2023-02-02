import { Stream } from "stream";
import * as fs from 'fs'
const log = console.log
const buildReader = () => {

    const readableStream = new Stream.Readable();
    readableStream.push('ping')
    readableStream.push('pong')
    return readableStream
} // ???

async function logChunks(readable: fs.ReadStream) { // chunk of data
    let i = 0
    for await (const chunk of readable) {
        log(i); i++
        log(chunk)
    }
}
export const readable = fs.createReadStream(
    'temp/test.txt',
    { encoding: 'utf-8' }
);
// logChunks(readable)

// let data: string = ''
// let readerStream: fs.ReadStream = fs.createReadStream('temp/test.txt')
// readerStream.setEncoding('utf-8')
// readerStream.on('data', (chunk) => {
//     data += chunk
// })
// readerStream.on('end', () => {
//     log(data)
// })

// readerStream.on('error', (err) => {
//     log('vv1 - ', err.stack)
// })
// log('program')
export default buildReader