const User = require('../models/User');
const connectDB = require('../config/db');
require('dotenv').config();

async function seed() {
  await connectDB();
  const admin = new User({
    name: process.env.ADMIN_NAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    role: 'admin',
  });
  await admin.save();
  console.log('Admin seeded');
  process.exit();
}

seed();
