import ajanta from './static/ajnta.webp';
import allepey from './static/allepey.webp';
import beach from './static/beach.webp';
import cherra from './static/cherrapunji.jpg';
import coorg from './static/coorg-mist.webp';
import darjeeling from './static/darjeeling.webp';
import elephanta from './static/elephanta-caves.webp';
import gateway from './static/gateway.jpg';
import ghat from './static/ghat.webp';
import hampi from './static/hampi-at-sunset.webp';
import khajuraho from './static/khajuraho.webp';
import lehladakh from './static/lehladakh.webp';
import lonavla from './static/lonavla.webp';
import mysore from './static/mysore.webp';
import natinalpark from './static/natinal park.webp';
import nationalpark from './static/national park.webp';
import pinkpalace from './static/pink-palace-jaipur.webp';
import rann from './static/rann of kutch.webp';
import redfort from './static/red-fort.webp';
import rishikesh from './static/Rishikesh-haridwar.webp';
import shirdi from './static/shirdi.webp';
import sinhgard from './static/sihngard.webp';
import tajmahal from './static/taj mahal.webp';
import victoria from './static/Victoria-Memorial-Kolkata.webp';
import shimla from './static/4286.webp';

const destinations = [
  // Northern India
  {
    name: "Taj Mahal",
    city: "Agra",
    state: "Uttar Pradesh",
    opensAt: "06:00 AM",
    closesAt: "06:30 PM",
    bestTimeToVisit: "October to March",
    imageUrl: `${tajmahal}`,
  },

  {
    name: "Red Fort, India Gate",
    city: "Delhi",
    state: "Delhi",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "October to March",
    imageUrl:`${redfort}`
  },
  {
    name: "Ghats, Kashi Vishwanath",
    city: "Varanasi",
    state: "Uttar Pradesh",
    opensAt: "24 hours",
    closesAt: "24 hours",
    bestTimeToVisit: "November to March",
    imageUrl:`${ghat}`
  },
  {
    name: "Rishikesh & Haridwar",
    city: "Rishikesh & Haridwar",
    state: "Uttarakhand",
    opensAt: "24 hours",
    closesAt: "24 hours",
    bestTimeToVisit: "October to March",
    imageUrl: `${rishikesh}`
  },
  {
    name: "Pink City",
    city: "Jaipur",
    state: "Rajasthan",
    opensAt: "-",
    closesAt: "-",
    bestTimeToVisit: "November to February",
    imageUrl:`${pinkpalace}`
  },

  // Himalayan Region
  {
    name: "Leh-Ladakh",
    city: "Leh-Ladakh",
    state: "Ladakh",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "May to September",
    imageUrl: `${lehladakh}`
  },
  {
    name: "Shimla & Manali",
    city: "Shimla & Manali",
    state: "Himachal Pradesh",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "November to February",
    imageUrl: `${shimla}`
  },
  {
    name: "Darjeeling & Sikkim",
    city: "Darjeeling & Sikkim",
    state: "West Bengal",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "March to June",
    imageUrl: `${darjeeling}`
  },

  // Western India
  {
    name: "Mumbai (Gateway of India, Marine Drive)",
    city: "Mumbai",
    state: "Maharashtra",
    opensAt: "24 hours",
    closesAt: "24 hours",
    bestTimeToVisit: "November to March",
    imageUrl:`${gateway}`
  },
  {
    name: "Beaches, Churches",
    city: "Goa",
    state: "Goa",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "Summer",
    imageUrl: `${beach}`
  },
  {
    name: "Rann of Kutch",
    city: "Kutch",
    state: "Gujarat",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "November to February",
    imageUrl: `${rann}`
  },

  // Southern India
  {
    name: "Alleppey, Munnar, Kovalam",
    city: "Kerala",
    state: "Kerala",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "October to March",
    imageUrl:`${allepey}`
  },
  {
    name: "Hampi",
    city: "Hampi",
    state: "Karnataka",
    opensAt: "06:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "October to February",
    imageUrl: `${hampi}`
  },
  {
    name: "Mysore Palace",
    city: "Mysore",
    state: "Karnataka",
    opensAt: "10:00 AM",
    closesAt: "05:30 PM",
    bestTimeToVisit: "September to February",
    imageUrl: `${mysore}`
  },
  {
    name: "Ooty & Coorg",
    city: "Ooty & Coorg",
    state: "Tamil Nadu & Karnataka",
    opensAt: "09:00 AM",
    closesAt: "05:00 PM",
    bestTimeToVisit: "October to March",
   imageUrl: `${coorg}`
  },

  // Eastern & North-Eastern India
  {
    name: "Victoria Memorial, Howrah Bridge",
    city: "Kolkata",
    state: "West Bengal",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "October to March",
    imageUrl: `${victoria}`
  },
  {
    name: "Cherrapunji, Shillong",
    city: "Meghalaya",
    state: "Meghalaya",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "March to June",
    imageUrl: `${cherra}`
  },
  {
    name: "Kaziranga National Park",
    city: "Kaziranga",
    state: "Assam",
    opensAt: "06:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "November to April",
   imageUrl: `${natinalpark}`
  },

  // Central India
  {
    name: "Khajuraho",
    city: "Khajuraho",
    state: "Madhya Pradesh",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "October to March",
    imageUrl: `${khajuraho}`
  },
  {
    name: "Kanha & Bandhavgarh National Parks",
    city: "Kanha & Bandhavgarh",
    state: "Madhya Pradesh",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "November to June",
    imageUrl: `${nationalpark}`
  },

  // **Additional destinations in Maharashtra**
  {
    name: "Ajanta & Ellora Caves",
    city: "Aurangabad",
    state: "Maharashtra",
    opensAt: "09:00 AM",
    closesAt: "05:00 PM",
    bestTimeToVisit: "October to March",
    imageUrl: `${ajanta}`
  },
  {
    name: "Shirdi Sai Baba Temple",
    city: "Shirdi",
    state: "Maharashtra",
    opensAt: "05:00 AM",
    closesAt: "10:00 PM",
    bestTimeToVisit: "All year round",
   imageUrl: `${shirdi}`
  },
  {
    name: "Lonavala & Khandala",
    city: "Lonavala & Khandala",
    state: "Maharashtra",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "October to March",
    imageUrl: `${lonavla}`
  },
  {
    name: "Sinhagad Fort",
    city: "Pune",
    state: "Maharashtra",
    opensAt: "09:00 AM",
    closesAt: "06:00 PM",
    bestTimeToVisit: "October to February",
   imageUrl: `${sinhgard}`
  },
  {
    name: "Elephanta Caves",
    city: "Mumbai",
    state: "Maharashtra",
    opensAt: "09:00 AM",
    closesAt: "05:30 PM",
    bestTimeToVisit: "October to March",
   imageUrl: `${elephanta}`
  }
];

export default destinations;
