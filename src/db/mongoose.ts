import mongoose from 'mongoose';

try {
  await mongoose.connect(process.env.MONGODB_URL!);
  console.log('Connection to MongoDB server established');
  console.log(`Host: ${mongoose.connection.host}`)
} catch (error) {
  console.log(error);
}