import { connect } from 'mongoose';
connect('https://ull-esit-inf-dsi-23-24-prct13-dsikea-api-gp9k.onrender.com').then(() => {
    console.log('Connection to MongoDB server stablished.');
}).catch(() => {
    console.log('Unable to connect to MongoDB server.');
});
