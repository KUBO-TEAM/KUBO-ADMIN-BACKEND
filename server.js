import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import UtilsRouter from './backend/routers/utils.router.js';
import RecipeRouter from './backend/routers/recipe.router.js';

const app = express();
const port = process.env.PORT || 3000;

const __dirname = path.resolve();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to Database!');
});

app.use(UtilsRouter);
app.use('/api/recipe', RecipeRouter);

// app.use(express.static(path.join(__dirname, '/frontend/build/web')));

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
