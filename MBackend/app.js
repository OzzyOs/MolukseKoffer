import express from "express";
import cors from "cors";
import { supabase } from "./config/supabase.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// GET POSTS DATA
app.get("/", async (req, res) => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) {
    return res.status(500).json({ message: "Failed to fetch posts." });
  }
  res.json(data);
});

// CREATE NEW POST
app.post("/api/posts", async (req, res) => {
  const { title, description, image } = req.body;
  if (!title || !description || !image) {
    return res.status(400).send("Please provide a title, image and description!");
  }
  const { data, error } = await supabase.from('posts').insert([{ title, description, image }]).select().single();
  if (error) {
    return res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
  }
  res.status(201).send({ success: true, data });
});

// CREATE NEW USER
app.post("/api/registerUser", async (req, res) => {
  const { userName, password, firstName, lastName, email } = req.body;
  if (!userName || !password || !firstName || !lastName || !email) {
    return res.status(400).send("Please make sure to provide all fields!");
  }
  const { data, error } = await supabase.from('users').insert([{ userName, password, firstName, lastName, email }]).select().single();
  if (error) {
    return res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
  }
  res.status(201).send({ success: true, data });
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});