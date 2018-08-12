// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = '<YOUR_LIVE_SID>'; // prod: ACc106dbbab3e71ff49bbb29bfe64b95fa
const authToken = '<YOUR_LIVE_AUTH>'; // prod: 9cdc9c7868d4b4b99653f3d28871c8b9
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+<TWILIO_NUMBER>',
     to: '+91<YOUR_TO_SEND_SMS_NUMBER>'
   })
  .then(message => console.log(message.sid))
  .done();
