import mongoose from 'mongoose'

const url = process.env.MONGODB_URL || "mongodb+srv://dsikea-rest-api:dsikea@clusterdsikea.nhxvu4f.mongodb.net/dsikea"

const connectDB = async() => {
 await mongoose.connect(url).then(() => {
  console.log('Connection to MongoDB server stablished.');
  console.log(`The db is conencted with ${mongoose.connection.host}`)
 }).catch(() => {
  console.log('Unable to connect to MongoDB server.');
 })
}

connectDB();