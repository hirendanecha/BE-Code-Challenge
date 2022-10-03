import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
require('dotenv').config()
import { connect } from 'mongoose';



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect(process.env.DATABASE_URI as string)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err: unknown) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./routes/index")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Running on ${PORT}`));