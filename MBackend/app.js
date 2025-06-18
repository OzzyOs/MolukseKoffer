import express from "express";
import cors from "cors";
import { db } from "./config/firebase.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// GET POSTS DATA
app.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("posts").get();
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts." });
  }
});

// CREATE NEW POST
app.post("/api/posts", async (req, res) => {
  const post = req.body;
  if (!post.title || !post.image) {
    return res.status(400).send("Please provide a title and image!");
  }
  try {
    const docRef = await db.collection("posts").add(post);
    const newPost = { id: docRef.id, ...post };
    res.status(201).send({ success: true, data: newPost });
  } catch (err) {
    console.error("Error creating post", err.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

// CREATE NEW USER
app.post("/api/registerUser", async (req, res) => {
  const user = req.body;
  if (!user.userName || !user.password || !user.firstName || !user.lastName || !user.email) {
    return res.status(400).send("Please make sure to provide all fields!");
  }
  try {
    const docRef = await db.collection("users").add(user);
    const newUser = { id: docRef.id, ...user };
    res.status(201).send({ succes: true, data: newUser });
  } catch (err) {
    console.error("Error creating user", err.message);
    res.status(500).json({ succes: false, message: "Something went wrong" });
  }
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});