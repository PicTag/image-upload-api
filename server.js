import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

import router from "./api/routes/storageRoutes.js";

app.use("/api", router);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
