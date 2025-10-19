const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports.generateDescription = async ({ destination, duration }) => {
  const completion = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Generate a detailed safari itinerary description for ${duration} nights in ${destination}, Tanzania.`,
    max_tokens: 300,
  });
  return completion.choices[0].text.trim();
};

// For images, use Unsplash API in frontend or here
