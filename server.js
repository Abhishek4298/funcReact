
// const express = require("express");
// const bodyParser = require('body-parser');
// const fs = require('fs')

// const app = express();


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
// app.use(bodyParser.json())
// app.use("/", router);
// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

// app.listen(3000);
// {
//   console.log("server is running");
// }


const express = require('express')
const app = express();
const cors = require('cors');
const router = require("./Backend/database/routes/index");

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

