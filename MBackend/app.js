import express from 'express';
import Post from "./models/post.model.js";
import { connectDb } from "./config/db.js";

const app = express()
const port = 3000


app.use(express.json()); // allows us to accept json data in the req.body

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/api/posts", async (req, res) => {
    const post = req.body; // user will send this data

    if(!post.title || !post.image) {
        return res.status(400).send('Please provide a title and image!')
    }

    const newPost = new Post(post)

    try {
        await newPost.save();
        res.status(201).send({success: true, data: newPost});
    } catch (err) {
        console.error("Error creating post", err.message);
        res.status(500).json({success: false, message: "Something went wrong"});
    }
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

console.log(process.env.MONGO_URI)

app.listen(port, () => {
    connectDb();
    console.log(`Example app listening on port ${port}`)
})
