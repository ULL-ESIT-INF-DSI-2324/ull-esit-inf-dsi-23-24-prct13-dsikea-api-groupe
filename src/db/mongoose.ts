import mongoose from 'mongoose'

const connectDB = async() => {
 await mongoose.connect("mongodb+srv://dsikea-rest-api:<password>@clusterdsikea.nhxvu4f.mongodb.net/dsikea").then(() => {
  console.log('Connection to MongoDB server stablished.');
  console.log(`The db is conencted with ${mongoose.connection.host}`)
 }).catch(() => {
  console.log('Unable to connect to MongoDB server.');
 })
}

connectDB();