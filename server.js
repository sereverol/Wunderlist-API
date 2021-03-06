const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

const app = express();

app.use(cors());

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server initialized on port ${PORT}`));
