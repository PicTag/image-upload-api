import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

import storageRouter from "./api/routes/storageRoutes.js";
import recognitionRouter from "./api/routes/recognitionRoutes.js";

app.use("/api", storageRouter);
app.use("/api", recognitionRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
