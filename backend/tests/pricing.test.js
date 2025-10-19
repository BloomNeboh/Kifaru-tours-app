const { calculatePricing } = require('../utils/pricingEngine');

test('calculates pricing correctly', () => {
  const result = calculatePricing({ destination: 'Serengeti', duration: 3, pax: 2 });
  expect(result.total).toBeGreaterThan(0);
});
