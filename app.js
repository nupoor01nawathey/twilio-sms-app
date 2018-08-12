// include lib
const express    = require('express'),
      bodyParser = require('body-parser'),
      ejs        = require('ejs'),
      socketIo   = require('socket.io');

const app        = express();

// set template engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// set static folder
app.use(express.static(__dirname + '/public'));

// set bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup get route
app.get('/', (req, res) => {
    res.render('index');
});

// setup post route
app.post('/', (req, res) => {
    const number = req.body.number;
    const text   = req.body.text;
    
    console.log(number);
    console.log(text);


    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    const accountSid = '<YOUR_ACCOUNT_SID>'; 
    const authToken = '<YOUR_AUTH_TOKEN>';
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        body: text, // 'This is the ship that made the Kessel Run in fourteen parsecs?'
        from: '<YOUR_FROM_NUMBER>', // this is available in your twilio account,check in Phone Numbers section
        to: '+' + number // To number requires '+' , India country code
    })
    .then(message => console.log(message.sid))
    .done();

});

// define port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started service at port ${port}`);
});
