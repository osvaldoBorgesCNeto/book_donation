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

const recoverEmailAdmin = async (name: string, email: string, confirmToken: string): Promise<void> => {
  await transport.sendMail({
    from: user,
    to: email,
    subject: 'Alteracao de email!!!',
    html: `<h1>Recuperando email</h1>
        <h2>Olá ${name}</h2>
        <p>Seu email foi alterado, pode recupera-lo clicando no link a seguir</p>
        <a href=http://localhost:3000/recover/${confirmToken}> Clique aqui</a>
        </div>`
  }).catch((err: any) => console.log(err))
}

export default recoverEmailAdmin
