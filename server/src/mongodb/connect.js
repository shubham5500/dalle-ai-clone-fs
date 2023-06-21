import mongoose from "mongoose"

export const connectDB = (url) => {
    console.log('url', url);
    mongoose.set('strictQuery', true);
    mongoose.connect(url).then(() => {
        console.log('Connected DB!');
    }).catch(e => console.log(e))
}