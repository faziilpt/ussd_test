const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/ussdNew', (req, res) => {
  const {
    sessionId = '',
    networkCode = '',
    serviceCode = '',
    phoneNumber = '',
    text = ''
  } = req.body || {};

  let response = '';

  if (!text) {
    response = 'CON Language Frameworks:\n1. Java\n2. Python\n3. PHP\n4. JavaScript';
  } else {
    const textArray = text.split('*');
    switch (textArray[0]) {
      case '1':
        response = 'END Java Frameworks\n1. SpringBoot\n2. Apache Struts';
        break;
      case '2':
        response = 'END Python Frameworks\n1. Flask\n2. Django\n3. PyTorch\n4. Pandas';
        break;
      case '3':
        response = 'END PHP Frameworks\n1. Laravel\n2. Symfony\n3. CodeIgniter\n4. Cake';
        break;
      case '4':
        response = 'END JavaScript Frameworks\n1. NodeJS\n2. NextJS\n3. TypeScript\n4. DenoJS';
        break;
      default:
        response = 'END Invalid input';
        break;
    }
  }

  res.set('Content-Type', 'text/plain');
  res.send(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`USSD app running on port ${PORT}`);
});