import { connect } from 'mongoose';
connect("mongodb+srv://dsikea-rest-api:dsikea@clusterdsikea.nhxvu4f.mongodb.net/").then(() => {
    console.log('Connection to MongoDB server stablished.');
}).catch(() => {
    console.log('Unable to connect to MongoDB server.');
});
