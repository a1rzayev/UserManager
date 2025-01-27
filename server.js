const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/mongodb');
const userRoutes = require('./routes/user-routes');

const app = express();
const PORT = 5000;

connectDB();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
