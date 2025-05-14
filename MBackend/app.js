import express from "express";
import Post from "./models/post.model.js";
import { connectDb } from "./config/db.js";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors);

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts); // ✅ send as JSON
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts." });
  }
});

app.post("/api/posts", async (req, res) => {
  const post = req.body; // user will send this data

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

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

console.log(process.env.MONGO_URI);

app.listen(port, () => {
  connectDb();
  console.log(`Example app listening on port ${port}`);
});
