import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

import emailController from './Controller/emailController.js'

let server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => {
    console.log(`Online na porta ${process.env.PORT}`);
});

server.use(emailController)