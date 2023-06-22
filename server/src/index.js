import  * as dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import { connectDB } from "./mongodb/connect.js";
import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config({path: '.env.localhost'});
const app = express();
connectDB(process.env.MONGO_DB_URL);

app.use(cors());
app.use(express.json());

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
    res.send('Hello from dalle');
})

app.listen(4000, () => {
    console.log('started');
})
