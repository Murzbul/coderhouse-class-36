import { createTransport } from 'nodemailer';

const TEST_MAIL = 'kraven.n.r@gmail.com';

const transporter = createTransport({
  service: 'gmail',
    port: 587,
    auth: {
        user: 'kraven.n.r@gmail.com',
        pass: 'vwqauqvaqxagvsqs'
    }
})

const mailOptions = {
  from: 'Servidor Node.JS',
  to: TEST_MAIL,
  subject: 'Mail de prueba desde Node.js',
  html: '<h1 style="color: blue;"> Contenido de prueba con un attachment desde <span style="color: green;" Node.JS con Nodemailer</span></h1>',
  attachments: [
    {
      path: 'nodemailer.png'
    }
  ]
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
