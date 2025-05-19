import express from "express";
import Post from "./models/post.model.js";
import User from "./models/user.model.js"
import { connectDb } from "./config/db.js";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors);

app.use(express.json());


// GET POSTS DATA
app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts); // Send as JSON
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts." });
  }
});


// CREATE NEW POST
app.post("/api/posts", async (req, res) => {
  const post = req.body; // User will send this data

  if (!post.title || !post.image) {
    return res.status(400).send("Please provide a title and image!");
  }

  const newPost = new Post(post);

  try {
    await newPost.save();
    res.status(201).send({ success: true, data: newPost });
  } catch (err) {
    console.error("Error creating post", err.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});


// CREATE NEW USER
app.post("/api/registerUser", async (req, res) =>{
  const user = req.body;

  if (!user.userName || !user.password || !user.firstName || !user.lastName || !user.email) {
    return res.status(400).send("Please make sure to provide all fields!")
  }

  const newUser = new User(user)

  try{
    await newUser.save();
    res.status(201).send({succes: true, data: newUser});
  } catch (err) {
    console.error("Error creating user", err.message);
    res.status(500).json({succes:false, message: "Something went wrong"})
  }
})

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

console.log(process.env.MONGO_URI);

app.listen(port, () => {
  connectDb();
  console.log(`Example app listening on port ${port}`);
});
