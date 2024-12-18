import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoute from './routes/api/users.js';

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Basic Route
app.get('/', (req, res) => res.send('Backend API Running'));

app.use('/api/users', usersRoute);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
