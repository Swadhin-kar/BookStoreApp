import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/books.route.js'
import userRoute from './routes/user.route.js'
import cors from 'cors'

const app = express();
dotenv.config();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT ||4000;
const URI = process.env.Mongo_URI;

// connecting to database
mongoose.connect(URI)
  .then(() => {
    console.log("connected to Mongo DB successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use('/book', bookRoute)
app.use('/user', userRoute)


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})