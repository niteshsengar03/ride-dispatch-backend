import express from "express"
import serverConfig from "./config/index.config.js";

const app = express();

const port =  serverConfig.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});