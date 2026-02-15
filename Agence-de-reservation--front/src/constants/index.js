// Application constants
export const APP_CONFIG = {
  name: 'Booking Platform',
  version: '1.0.0',
  description: 'Modern booking platform for hotels, flights, tours, and cabs'
};

// API endpoints
export const API_ENDPOINTS = {
  hotels: '/api/hotels',
  flights: '/api/flights',
  tours: '/api/tours',
  cabs: '/api/cabs',
  auth: '/api/auth'
};

// Theme options
export const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

// Navigation items
export const NAV_ITEMS = {
  main: [
    { name: 'Listings', path: '/listings' },
    { name: 'Pages', path: '/pages' }
  ],
  categories: [
    { name: 'Hotel', path: '/', icon: 'fa-solid fa-hotel' },
    { name: 'Flight', path: '/flights', icon: 'fa-solid fa-plane' },
    { name: 'Tour', path: '/tours', icon: 'fa-solid fa-globe-americas' },
    { name: 'Cab', path: '/cabs', icon: 'fa-solid fa-car' }
  ]
};
