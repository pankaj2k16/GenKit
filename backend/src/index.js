const express = require('express');
const app = express();
const port = 3000;
const greetingRoute = require('./routes/greeting');

app.use('/greeting', greetingRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});