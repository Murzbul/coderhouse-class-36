import { createTransport } from 'nodemailer';

const TEST_MAIL = 'thea46@ethereal.email';

const transporter = createTransport({
  host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'thea46@ethereal.email',
        pass: 'NXXR9Ejy7ADt9knuBE'
    }
})

const mailOptions = {
  from: 'Servidor Node.JS',
  to: TEST_MAIL,
  subject: 'Mail de prueba desde Node.js',
  html: '<h1 style="color: blue;"> Contenido 2 de prueba desde <span style="color: green;" Node.JS con Nodemailer</span></h1>'
}

try
{
  const info = await transporter.sendMail(mailOptions);
  console.log(info);
}
catch (e)
{
  console.log(e)
}
