import twilio from 'twilio';

const accountSid = 'ACa49230e31ef45b68f767fe2ab825beeb';
const authToken = 'd64a483d26f321d291fe1090f1da309d';

const client = twilio(accountSid, authToken);

try
{
  const message = await client.messages.create({
    body: 'Hola soy un SMS desde Node.JS',
    from: '+13155993091',
    to: '+542234497220'
  });

  console.log(message);
}
catch (e)
{
  console.log(e);
}
