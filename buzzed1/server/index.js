const cors = require('cors');
const express = require('express')
const app = express()
const port = 3000
const router = require('./routers.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/db', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});