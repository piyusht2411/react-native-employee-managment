import express, { Express, Request, Response , Application, NextFunction} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/route';
import db = require('./config/db');
import { json } from 'body-parser';
import cookieParser from 'cookie-parser';
dotenv.config();
declare global {
  namespace Express {
    interface Request {
      userId?: string ;
}
}}

const app: Application = express();
const PORT = process.env.PORT || 8080;
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', routes);



// if any error in routes this will triggered
app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
  // console.log("hey");
  res.status(500).json({message: err.message});  
});

//database connection
const start = async () => {
  try {
    // connectDB
    await db.connectDB(process.env.MONGO_URL!);
    app.listen(PORT, () => console.log(`Server is connected to port : ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

//calling database function
start();