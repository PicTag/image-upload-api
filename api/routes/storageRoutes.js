import express from 'express';
import { getImage, putObject } from '../controllers/storageController.js';
var router = express.Router();

import multer from 'multer';
const upload = multer();

router.post('/upload', upload.single('file'), async function (req, res) {
  try {
    const title = req.body.title;
    const file = req.file;

    await putObject(title, file.buffer);

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
