import { connect } from 'mongoose'

const connectDB = async() => {
 await connect(`mongodb+srv://dsikea-rest-api:<password>@clusterdsikea.nhxvu4f.mongodb.net/dsikea`).then(() => {
  console.log('Connection to MongoDB server stablished.');
 }).catch(() => {
  console.log('Unable to connect to MongoDB server.');
 })
}

connectDB();