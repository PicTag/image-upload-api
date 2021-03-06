import express from 'express';
import { getImage, putObject } from '../controllers/storageController.js';
var router = express.Router();

import multer from 'multer';
const upload = multer();

router.post('/upload', upload.array('files', 12), async function (req, res) {
  try {
    const files = req.files;
    console.log(req);
    console.log(files);
    let puts = [];
    files.forEach((file) => puts.push(putObject(file.originalname, file.buffer)));

    const values = await Promise.all(puts);
    res.sendStatus(200);
  } catch (error) {
    res.send(error.message);
  }
});

router.get('/getImage', async function (req, res) {
  try {
    const title = req.query.title;

    await getImage(title);
    res.sendStatus(200);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
