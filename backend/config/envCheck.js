const requiredVars = ['MONGO_URI', 'JWT_SECRET', 'OPENAI_API_KEY', 'UNSPLASH_KEY'];
requiredVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`Missing environment variable: ${varName}`);
    process.exit(1);
  }
});
