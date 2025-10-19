const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports.generateDescription = async ({ destination, duration }) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a professional Tanzania safari planner. Write detailed, engaging, and realistic itinerary descriptions.',
        },
        {
          role: 'user',
          content: `Generate a detailed safari itinerary description for ${duration} nights in ${destination}, Tanzania.`,
        },
      ],
      max_tokens: 400,
    });

    return response.choices[0].message.content.trim();
  } catch (err) {
    console.error('Error generating AI description:', err.message);
    return 'AI description currently unavailable.';
  }
};
