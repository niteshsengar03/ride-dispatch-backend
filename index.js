import express, { Router } from "express"
import serverConfig from "./config/index.config.js";
import mongoose from "mongoose";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());


app.use('/api/v1',Router);
app.use(errorHandler);

 async function main() {
  try {
    await mongoose.connect(serverConfig.MONGO_URL);
    const port = serverConfig.PORT;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }catch(e){
    console.log("Error in connecting the db");
  }
}

main();