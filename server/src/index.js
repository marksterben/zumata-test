import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/database.js";

// routes
import router from "./routes/index.js";

const port = process.env.APP_PORT || 3000;

// Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable All CORS Requests
app.use(cors());

// Require our routes into the application.
app.use(router);

// Server listen to port
try {
  await db.authenticate();
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
