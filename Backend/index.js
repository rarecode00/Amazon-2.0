const connectToMongo = require('./database/connectivity');
const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;

connectToMongo();
// app.use(cors())
app.use(express.json())
app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
