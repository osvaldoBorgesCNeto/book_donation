import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'

dotenv.config()

const user = process.env.USER_EMAIL
const pass = process.env.PASSWORD_EMAIL

const transport = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: user,
    pass: pass
  },
  tls: { rejectUnauthorized: false }
})

const sendEmail = async (name: string, email: string, confirmToken: string, verify: string): Promise<void> => {
  await transport.sendMail({
    from: user,
    to: email,
    subject: 'Por favor, confirme sua conta',
    html: `<h1>Confirmação de e-mail</h1>
        <h2>Olá ${name}</h2>
        <p>Obrigado por se inscrever. Confirme seu e-mail clicando no link a seguir</p>
        <a href=http://localhost:3000/${verify}/${confirmToken}> Clique aqui</a>
        </div>`
  }).catch((err: any) => console.log(err))
}

export default sendEmail
