const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/',async(req,res) => {
  console.log("outputing request to the requet endpoint")
  console.log(req.body);
  console.log(req.headers);
  res.sendStatus(201);
})

app.get('/',async(req,res) => {
  console.log("outputing request to the requet endpoint")
  console.log(req.body);
  console.log(req.headers);
  res.sendStatus(201);
})
const port = 3000;

app.listen(port, () => console.log(`Server running...${port}`));
