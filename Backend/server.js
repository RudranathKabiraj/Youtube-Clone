import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/UserRoutes.js';
import videoRoutes from './routes/videosRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import channelRoutes from './routes/channelRoutes.js';

dotenv.config();
const app = express(); // no "new" needed — express() is a factory function, not a constructor

app.use(cors({
  origin: "https://youtube-clone-six-eta-65.vercel.app", // your Vercel frontend URL
  credentials: true
}));
app.use(express.json());

userRoutes(app);
videoRoutes(app);
commentRoutes(app);
channelRoutes(app);

app.get('/', (req, res) => {
  res.send('YouTube Clone API is running...');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('database connected successfully!'))
  .catch(err => console.log('database could not be connected: ', err));

app.listen(process.env.PORT, () => {
  console.log(`server is running at port: ${process.env.PORT}`);
});