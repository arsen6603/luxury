const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  const clientIP = req.ip;
  const forwardedFor = req.get('x-forwarded-for');
  const viaProxy = forwardedFor !== undefined;
    console.log(clientIP)
  res.status(200).json({
    clientIP,
    forwardedFor,
    viaProxy,
    requestBody: req.body,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
