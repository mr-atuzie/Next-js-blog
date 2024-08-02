import mongoose from "mongoose";
import colors from "colors";

const MONGODB_URI = process.env.DB;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB
 */
export const connectDB = async () => {
  if (cached.conn) {
    console.log("Using existing database connection".cyan.bold);
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log(
      `Database Connected: ${cached.conn.connection.host}`.green.bold
    );
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("Database connection error:".red.bold, error);
    throw new Error("Database connection failed".red.bold);
  }
};
