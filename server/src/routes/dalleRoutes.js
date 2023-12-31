import express from "express";
import * as dotenv from "dotenv";

import { Configuration, OpenAIApi } from "openai";

dotenv.config({path: '.env.localhost'});

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  try {
    const openAIRes = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = openAIRes.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log({ error });
    res.status(500).send(error?.response.data.error.message)
  }
});

export default router;
