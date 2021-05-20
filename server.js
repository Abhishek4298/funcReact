
const express = require('express')
const app = express();
const cors = require('cors');

const port = 8080;

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})

