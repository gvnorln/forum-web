const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db'); 
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articleRoutes');
const eventRoutes = require('./routes/eventRoutes');
const momentRoutes = require('./routes/momentRoutes');
const userRoutes = require('./routes/userRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const biayaOperasionalRoutes = require('./routes/biayaOperasionalRoutes');  // Tambahkan ini

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to Database
connectDB()
  .then(() => {
    console.log('Database connected');
    //Sinkronisasi Models dengan Database 
    sequelize.sync({ alter: true }) // alter: true to automatically update schema if changes detected
      .then(() => {
        console.log('All models synchronized');
      })
      .catch(err => {
        console.error('Error synchronizing models:', err);
      });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/moments', momentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reservasiRuangRapat', reservationRoutes);
app.use('/api', biayaOperasionalRoutes);  // Tambahkan ini

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
