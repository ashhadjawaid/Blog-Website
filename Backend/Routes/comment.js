import express from "express";
import Comment from "../Models/ModelComment.js";

const router = express.Router();

//Create a comment

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    const newComment = new Comment({
      text,
      likes: [],
    });

    await newComment.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all comments
router.get("/all", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router
