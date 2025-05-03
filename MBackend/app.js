import dotenv from "dotenv"
import express from 'express';

const app = express()
const port = 3000

dotenv.config()

app.get('/Photos', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

console.log(process.env.MONGO_URI)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
