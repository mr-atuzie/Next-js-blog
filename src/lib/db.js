const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
import colors from "colors";

// const connection = {};

const MONGODB_URI = process.env.MONGO_DB;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local".red
  );
}

// Global is used here to maintain a cached connection across hot reloads in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  try {
    // if (connection.isConnected) {
    //   console.log("Using existing connection");
    //   return;
    // }

    if (cached.conn) {
      console.log("Using existing database connection".green);
      return cached.conn;
    }

    // const db = await mongoose.connect(process.env.MONGO_DB);

    // connection.isConnected = db.connections[0].readyState;

    // console.log(`Database Connected: ${db.connection.host}`);

    if (!cached.promise) {
      console.log("Creating new database connection".yellow);

      cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
        console.log(`Database connected`.cyan);
        return mongoose;
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
