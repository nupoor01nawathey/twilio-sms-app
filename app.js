// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = '<YOUR_LIVE_SID>'; 
const authToken = '<YOUR_LIVE_AUTH>'; 
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+<TWILIO_NUMBER>',
     to: '+91<YOUR_TO_SEND_SMS_NUMBER>'
   })
  .then(message => console.log(message.sid))
  .done();
