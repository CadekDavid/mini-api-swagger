import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serveSwagger } from './swagger.js';
import healthRouter from './routes/health.route.js';
import postsRouter from './routes/posts.route.js';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

// Swagger UI na /api
serveSwagger(app);

// Základní routy
app.use('/health', healthRouter);
app.use('/posts', postsRouter);

// Mongo připojení (volitelně pro /posts)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/blog';
if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB: connected'))
    .catch(err => console.error('MongoDB: error', err));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
  console.log(`Swagger UI:       http://localhost:${PORT}/api`);
});
