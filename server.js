const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Anime = mongoose.model('Anime', new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  downloadUrl: String
}));

app.get('/api/anime', async (req, res) => {
  const animes = await Anime.find();
  res.json(animes);
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));
