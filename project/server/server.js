const express = require('express');
const app = express();

const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json())
const cors = require('cors');
const corsOptions = {
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors());

app.post('/sendEmail', (req, res) => {
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'svnestietestmail@gmail.com',
      pass: 'pswrd2503'
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'svnestietestmail@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error')
    } else {
      console.log('Email send: ' + info.response)
      res.send('success')
    }
  })
})


app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
})