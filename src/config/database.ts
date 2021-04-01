import mongoose, { connect } from 'mongoose';

(async () => {
    const con = await connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log(`Database is successfully connected at ${con.connection.host}`)
})()