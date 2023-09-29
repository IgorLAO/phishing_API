import nodemailer from 'nodemailer';
import 'dotenv/config'
import config from './connection.js';

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: "teste123teste3@outlook.com",
        pass: "teste123teste"
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default transporter;


export async function sendDB(DB) {
    let sql = `
    INSERT INTO INFO_PESSOAS (EMAIL, SENHA)
                VALUES( ?, ?)`;

    const [resp] = await config.query(sql, [DB.subject, DB.text])
    return resp
};

export async function ListInfos() {
    let sql = `
    SELECT 	EMAIL 	AS Email,
            SENHA	AS Senha
    FROM	INFO_PESSOAS`

    const [resp] = await config.query(sql)
    return resp
};