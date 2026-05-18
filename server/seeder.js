const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const Product = require("./models/Product");

const products = require("./data/products");

dotenv.config();

const importData = async () => {

  try {

    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Imported");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

importData();