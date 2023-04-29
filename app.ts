import express, { Express, Request, Response }  from 'express';
import * as dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') { 
  dotenv.config();
}

const app: Express = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})