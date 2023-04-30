import express, { Express, Request, Response }  from 'express';
import * as dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') { 
  dotenv.config();
}
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from "typeorm";
import Task from './src/tasks/task.entity';

const app: Express = express();
const port = process.env.PORT || 3000;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  entities: [Task]
});

// parse request body json and attach to req.body
// as javascript object
app.use(bodyParser.json());

// use cors
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data source initialized")
    app.listen(port, () => console.log(`App is running on port ${port}`))
  })
  .catch(e => console.error("Error initializing data source: ", e))