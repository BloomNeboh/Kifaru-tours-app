// Real fees based on TANAPA 2023/2024 tariffs (projected for 2025; update annually)
// Sources: tanzaniaparks.go.tz, various safari sites
const parkFees = {
  'Serengeti': { adult: 70, child: 20 }, // USD per day, non-resident peak
  'Ngorongoro': { adult: 70, child: 20 },
  'Tarangire': { adult: 50, child: 15 },
  'Lake Manyara': { adult: 50, child: 15 },
  'Arusha': { adult: 45, child: 15 },
  // Add more
};

const accommodationRates = { // Sample avg rates per night USD
  'Serengeti Lodge': { single: 600, double: 800, triple: 1000 },
  'Ngorongoro Camp': { single: 500, double: 700, triple: 900 },
  // From sources like serengeti.com, fourseasons.com (avg $629+)
};

const vehicleCost = 200; // per day USD
const driverCost = 100; // per day
const commission = 0.20;

module.exports.calculatePricing = ({ destination, duration, pax, upsells = [], roomType = 'double' }) => {
  const parkFeePerPerson = parkFees[destination]?.adult || 50;
  const accomRate = accommodationRates[`${destination} Lodge`]?.[roomType] || 700;
  
  const parkTotal = parkFeePerPerson * pax * (duration + 1); // days = nights + 1
  const accomTotal = accomRate * duration * Math.ceil(pax / 2); // Approx for doubles
  const vehicleTotal = vehicleCost * (duration + 1);
  const driverTotal = driverCost * (duration + 1);
  const upsellTotal = upsells.length * 100; // $100 per upsell
  
  const subTotal = parkTotal + accomTotal + vehicleTotal + driverTotal + upsellTotal;
  const comm = subTotal * commission;
  const total = subTotal + comm;
  
  return {
    park: parkTotal,
    accommodation: accomTotal,
    vehicle: vehicleTotal,
    driver: driverTotal,
    upsells: upsellTotal,
    commission: comm,
    total,
  };
};
