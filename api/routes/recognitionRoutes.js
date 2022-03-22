import express from 'express';
import { classifyImage } from '../controllers/recognitionController.js';
var router = express.Router();

import multer from 'multer';
const upload = multer();

router.get('/classify', upload.array('files', 12), async function (req, res) {
  try {
    console.log('got req');
    const files = req.files;
    let puts = [];
    console.log('here');
    console.log(files);
    files.forEach((file) => puts.push(classifyImage(file)));

    const values = await Promise.all(puts);
    console.log(values);
    res.json(values);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
