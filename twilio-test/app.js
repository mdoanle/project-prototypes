/* eslint-disable */

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
  body: 'This is a test text message!',
  from: '+14793422245',
  to: '+17147437206'
})
  // eslint no-console: "error"
  .then(message => console.log(message))
  .catch(err => console.err(err));
