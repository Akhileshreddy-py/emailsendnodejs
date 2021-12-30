var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'reactconcept7@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'reactconcept7@gmail.com',
  to: 'albertbhai73@gmail.com',
  subject: 'happy birthday man',
  text: 'That is amazimg man wow'
};
for(var i=0;i<=5;i++)
{
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("akhi sir :",error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});}