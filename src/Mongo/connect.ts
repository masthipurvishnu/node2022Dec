import { MongoClient, Db } from "mongodb";
// import { Collection } from "mongoose";
const uri = 'mongodb+srv://m001-student:mALTXkEu9p9giqh8@sandbox.cflxq.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect()
        await client.db('test').command({ ping: 1 })
        console.log('Connection successfully to server');
    } catch (error) {
        console.log('Connection failed .: ', error);
    } finally {
        await client.close()
        console.log('Connection close');
    }
}
run().catch(console.dir)

export const movies = async () => {
    try {
        await client.connect()
        const db = client.db('sample_mflix')
        const collection = db.collection('movies')
        const movies: any = collection.findOne({ year: { $gte: 2015 } })
        console.log(`movies are here1: ${movies.length}`);
        return movies

    } catch (error) {
        console.log('movie error - ', error);
        return error
    }
} 