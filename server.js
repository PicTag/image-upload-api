import express from 'express';

const app = express();
const port = 3000;

import router from "./api/routes/storageRoutes.js";

app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
