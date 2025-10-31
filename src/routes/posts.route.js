import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

const PostSchema = new mongoose.Schema({
  title: String,
  body: String
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

router.get('/', async (req, res) => {
  const items = await Post.find().lean();
  res.json(items);
});

router.post('/', async (req, res) => {
  const created = await Post.create(req.body);
  res.status(201).json(created);
});

export default router;
