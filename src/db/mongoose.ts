import { connect } from 'mongoose'

connect(process.env.MONGODB_URL as string).then(() => {
  console.log('Connection to MongoDB server stablished.');
}).catch(() => {
  console.log('Unable to connect to MongoDB server.');
})