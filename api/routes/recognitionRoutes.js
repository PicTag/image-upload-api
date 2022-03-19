import express from 'express';
import { classifyImage } from '../controllers/recognitionController.js';
var router = express.Router();

import multer from 'multer';
const upload = multer();

router.get('/classify', upload.array('files', 12), async function (req, res) {
  try {
    const files = req.files;
    let puts = [];
    files.forEach((file) => puts.push(classifyImage(file)));

    const values = await Promise.all(puts);
    res.json(values);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
