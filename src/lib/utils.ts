import mongoose from 'mongoose';

interface Connection {
  isConnected: boolean;
}

const connection: Connection = { isConnected: false };

const connectDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    };
    if (!process.env.MONGO) {
      throw new Error('MongoDB connection string is not provided');
    };
    const db = await mongoose.connect(process.env.MONGO);
    console.log('Database connected');
    connection.isConnected = db.connections[0].readyState === 1;
  } catch (error:any) {
    console.error('Error connecting to database:', error);
    throw new Error(error);
  };
};

export default connectDb;
