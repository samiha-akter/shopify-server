const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s2waoee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// middleware
app.use(express.json());
app.use(cors());

// mongoDB
const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      await client.connect();
      
      console.log("You successfully connected to MongoDB!");
    } finally {
      
      await client.close();
    }
  }
  run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});