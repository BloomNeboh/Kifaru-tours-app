exports.getFounderInfo = (req, res) => {
  const founder = {
    name: 'Eliud Mchome',
    title: 'Founder & Tourism Marketing Manager',
    location: 'Arusha, Tanzania',
    bio: 'From Maji ya Chai to the world I build travel experiences that honor Africa’s rhythm and beauty.',
    certifications: ['Bachelor Degree in Tourism Management', 'Marketing & Brand Development', 'Web Development Full Stack'],
    timeline: [
      { year: 2018, event: 'Hospitality foundations' },
      { year: 2021, event: 'Started as Receptionist @ Planet Lodge' },
      { year: 2023, event: 'Marketing Lead @ KIA Lodge' },
      { year: 2025, event: 'Founded Kifaru Tours' },
    ],
    socials: { linkedin: '#', github: '#', instagram: '#' },
  };
  res.json(founder);
};
