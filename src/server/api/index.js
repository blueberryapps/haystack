import express from 'express';
import sendEmail from './sendEmail';

const app = express();

app.post('/send-email', sendEmail);

export default app;
