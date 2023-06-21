import express from 'express';
import * as dotenv from 'dotenv';

import {v2 as cloudinary} from 'cloudinary';
import { PostModel } from '../mongodb/models/post.model.js';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('HEllo from post router')
})

export default router;