const express = require('express')
const app = express();
const cors = require('cors');
const router = require("./Backend/database/routes/index");
const bodyParser = require('body-parser')

const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})

