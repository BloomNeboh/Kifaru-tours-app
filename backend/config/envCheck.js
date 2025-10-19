// config/envCheck.js

// Load environment variables
require('dotenv').config();

// List of required environment variables
const requiredVars = [
  'MONGO_URI',
  'JWT_SECRET',
  'OPENAI_API_KEY',
  'UNSPLASH_KEY',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD',
  'ADMIN_NAME',
  'PORT'
];

// Check each variable
requiredVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`❌ Missing environment variable: ${varName}`);
    process.exit(1); // Stop the app if any variable is missing
  }
});

console.log('✅ All required environment variables are loaded');
