const express = require('express')
const app = express();
const cors = require('cors');
const router = require("./Backend/database/routes/index");
const bodyParser = require('body-parser')
const { Users } = require('../funcReact/Backend/database/models')

const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userData = await Users.findAll({
      where: {
        username, password
      }
    })
    if (userData.length) {
      console.log("successfull login");
      res.send({
        token: 'test123'
      });
    }
    else{
      console.log("please enter correct credentials");
      res.send("please enter correct credentials")
    }
  } catch (error) {
    res.send("Something went wrong");
  }
});
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})

