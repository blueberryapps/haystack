import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Security
app.disable('x-powered-by');
app.use(helmet.xssFilter());
app.use(helmet.frameguard('sameorigin'));
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());

// Middlewares
app.use(morgan('short'));
app.use(compression());
app.use(cookieParser());

// Apps
app.get('/', (req, res) => {
  res.send('Haystack')
})

export default app;
