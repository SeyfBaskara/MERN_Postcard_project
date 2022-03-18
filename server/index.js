const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const postCardRoutes = require('./routes/postCard');

connectDB();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use('/api/postcard', postCardRoutes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
