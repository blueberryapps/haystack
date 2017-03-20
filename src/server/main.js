import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import rollbar from 'rollbar';
import errorHandler from './middlewares/errorHandler';
import frontend from './frontend';

const app = express();

// Security
app.disable('x-powered-by');
app.use(helmet.xssFilter());
app.use(helmet.frameguard('sameorigin'));
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());

// Middlewares
app.use(morgan('dev'));
app.use(compression());
app.use(cookieParser());

// Apps
app.use(frontend);

// Error reporter
if (process.env.ROLLBAR_SERVER_TOKEN && process.env.APP_ENV !== 'development') {
  console.log('Error reporting to rollbar with TOKEN %s and ENV %s', process.env.ROLLBAR_SERVER_TOKEN, process.env.APP_ENV);
  app.use(rollbar.errorHandler(process.env.ROLLBAR_SERVER_TOKEN, { environment: process.env.APP_ENV }));
}

// Error handler
app.use(errorHandler);

export default app;
