require('dotenv').config();
console.log('Loaded MONGO_URI:', process.env.MONGO_URI);
require('./config/envCheck');
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/itineraries', require('./routes/itineraryRoutes'));
app.use('/api/accommodations', require('./routes/accommodationRoutes'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/founder', require('./routes/founderRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
