const transportOptions = [
  // Transport options for Taj Mahal (Agra)
  { type: 'Bus', departureTime: '2025-02-10 06:00 AM', source: 'Mumbai', destination: 'Taj Mahal, Agra' },
  { type: 'Train', departureTime: '2025-02-10 08:00 AM', source: 'Mumbai', destination: 'Taj Mahal, Agra' },
  { type: 'Plane', departureTime: '2025-02-10 10:00 AM', source: 'Mumbai', destination: 'Taj Mahal, Agra' },

  // Transport options for Great Wall of China (Beijing)
  { type: 'Bus', departureTime: '2025-02-10 11:00 AM', source: 'Nashik', destination: 'Great Wall of China, Beijing' },
  { type: 'Train', departureTime: '2025-02-10 12:30 PM', source: 'Nashik', destination: 'Great Wall of China, Beijing' },
  { type: 'Plane', departureTime: '2025-02-10 03:00 PM', source: 'Mumbai', destination: 'Great Wall of China, Beijing' },

  // Transport options for Colosseum (Rome)
  { type: 'Bus', departureTime: '2025-02-10 08:00 AM', source: 'Chh.SambhajiNagar', destination: 'Colosseum, Rome' },
  { type: 'Train', departureTime: '2025-02-10 09:30 AM', source: 'Chh.SambhajiNagar', destination: 'Colosseum, Rome' },
  { type: 'Plane', departureTime: '2025-02-10 11:00 AM', source: 'Mumbai', destination: 'Colosseum, Rome' },

  // Transport options for Statue of Liberty (New York)
  { type: 'Bus', departureTime: '2025-02-10 09:00 AM', source: 'Nanded', destination: 'Statue of Liberty, New York' },
  { type: 'Train', departureTime: '2025-02-10 10:30 AM', source: 'Nanded', destination: 'Statue of Liberty, New York' },
  { type: 'Plane', departureTime: '2025-02-10 12:00 PM', source: 'Mumbai', destination: 'Statue of Liberty, New York' },

  // Transport options for Machu Picchu (Cusco)
  { type: 'Bus', departureTime: '2025-02-10 07:00 AM', source: 'Amravati', destination: 'Machu Picchu, Cusco' },
  { type: 'Train', departureTime: '2025-02-10 08:30 AM', source: 'Amravati', destination: 'Machu Picchu, Cusco' },
  { type: 'Plane', departureTime: '2025-02-10 11:00 AM', source: 'Mumbai', destination: 'Machu Picchu, Cusco' },

  // Transport options for Sydney Opera House (Sydney)
  { type: 'Bus', departureTime: '2025-02-10 09:00 AM', source: 'Nashik', destination: 'Sydney Opera House, Sydney' },
  { type: 'Train', departureTime: '2025-02-10 10:30 AM', source: 'Nashik', destination: 'Sydney Opera House, Sydney' },
  { type: 'Plane', departureTime: '2025-02-10 01:00 PM', source: 'Mumbai', destination: 'Sydney Opera House, Sydney' },

  // Transport options for Grand Canyon (Grand Canyon Village)
  { type: 'Bus', departureTime: '2025-02-10 06:00 AM', source: 'Chh.SambhajiNagar', destination: 'Grand Canyon, Arizona' },
  { type: 'Train', departureTime: '2025-02-10 08:00 AM', source: 'Chh.SambhajiNagar', destination: 'Grand Canyon, Arizona' },
  { type: 'Plane', departureTime: '2025-02-10 10:00 AM', source: 'Mumbai', destination: 'Grand Canyon, Arizona' },

  // Transport options for Acropolis of Athens (Athens)
  { type: 'Bus', departureTime: '2025-02-10 08:00 AM', source: 'Mumbai', destination: 'Acropolis of Athens, Athens' },
  { type: 'Train', departureTime: '2025-02-10 09:00 AM', source: 'Mumbai', destination: 'Acropolis of Athens, Athens' },
  { type: 'Plane', departureTime: '2025-02-10 11:30 AM', source: 'Mumbai', destination: 'Acropolis of Athens, Athens' },

  // Transport options for Christ the Redeemer (Rio de Janeiro)
  { type: 'Bus', departureTime: '2025-02-10 07:00 AM', source: 'Nashik', destination: 'Christ the Redeemer, Rio de Janeiro' },
  { type: 'Train', departureTime: '2025-02-10 09:30 AM', source: 'Nashik', destination: 'Christ the Redeemer, Rio de Janeiro' },
  { type: 'Plane', departureTime: '2025-02-10 12:00 PM', source: 'Mumbai', destination: 'Christ the Redeemer, Rio de Janeiro' },

  // Transport options for Pyramids of Giza (Giza)
  { type: 'Bus', departureTime: '2025-02-10 08:00 AM', source: 'Mumbai', destination: 'Pyramids of Giza, Giza' },
  { type: 'Train', departureTime: '2025-02-10 09:30 AM', source: 'Mumbai', destination: 'Pyramids of Giza, Giza' },
  { type: 'Plane', departureTime: '2025-02-10 12:00 PM', source: 'Mumbai', destination: 'Pyramids of Giza, Giza' },

  // Transport options for Stonehenge (Salisbury)
  { type: 'Bus', departureTime: '2025-02-10 10:00 AM', source: 'Chh.SambhajiNagar', destination: 'Stonehenge, Salisbury' },
  { type: 'Train', departureTime: '2025-02-10 12:00 PM', source: 'Chh.SambhajiNagar', destination: 'Stonehenge, Salisbury' },
  { type: 'Plane', departureTime: '2025-02-10 02:00 PM', source: 'Mumbai', destination: 'Stonehenge, Salisbury' },

  // Transport options for Mount Fuji (Fujinomiya)
  { type: 'Bus', departureTime: '2025-02-10 05:30 AM', source: 'Mumbai', destination: 'Mount Fuji, Fujinomiya' },
  { type: 'Train', departureTime: '2025-02-10 07:00 AM', source: 'Mumbai', destination: 'Mount Fuji, Fujinomiya' },
  { type: 'Plane', departureTime: '2025-02-10 09:00 AM', source: 'Mumbai', destination: 'Mount Fuji, Fujinomiya' },

  // Transport options for The Louvre (Paris)
  { type: 'Bus', departureTime: '2025-02-10 09:30 AM', source: 'Mumbai', destination: 'The Louvre, Paris' },
  { type: 'Train', departureTime: '2025-02-10 11:00 AM', source: 'Mumbai', destination: 'The Louvre, Paris' },
  { type: 'Plane', departureTime: '2025-02-10 01:00 PM', source: 'Mumbai', destination: 'The Louvre, Paris' },

  // Transport options for The Kremlin (Moscow)
  { type: 'Bus', departureTime: '2025-02-10 10:30 AM', source: 'Saint Petersburg', destination: 'The Kremlin, Moscow' },
  { type: 'Train', departureTime: '2025-02-10 12:30 PM', source: 'Saint Petersburg', destination: 'The Kremlin, Moscow' },
  { type: 'Plane', departureTime: '2025-02-10 02:00 PM', source: 'Saint Petersburg', destination: 'The Kremlin, Moscow' }
];

export default transportOptions;
