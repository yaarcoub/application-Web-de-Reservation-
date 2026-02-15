// URLs des pages
export const ROUTES = {
  HOME: '/',
  FLIGHTS: '/flights',
  HOTELS: '/hotels',
  TOURS: '/tours',
  CABS: '/cabs',
  ABOUT: '/about',
  CONTACT: '/contact',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  DASHBOARD: '/dashboard',
  MY_BOOKINGS: '/my-bookings',
  BOOKING_DETAILS: '/booking/:id',
  ADMIN_DASHBOARD: '/dashboard'

};

// Villes populaires
export const POPULAR_CITIES = [
  { id: 1, name: 'Paris', code: 'CDG' },
  { id: 2, name: 'Lyon', code: 'LYS' },
  { id: 3, name: 'Marseille', code: 'MRS' },
  { id: 4, name: 'Nice', code: 'NCE' },
  { id: 5, name: 'Toulouse', code: 'TLS' },
  { id: 6, name: 'Bordeaux', code: 'BOD' },
  { id: 7, name: 'Nantes', code: 'NTE' },
  { id: 8, name: 'Strasbourg', code: 'SXB' },
];

// Classes de vol
export const FLIGHT_CLASSES = [
  { value: 'economy', label: 'Économique' },
  { value: 'business', label: 'Business' },
  { value: 'first', label: 'Première classe' },
];

// Types de voyages
export const TRIP_TYPES = [
  { value: 'one-way', label: 'Aller simple' },
  { value: 'round-trip', label: 'Aller-retour' },
  { value: 'multi-city', label: 'Multi-destination' },
];

// Statuts de réservation
export const RESERVATION_STATUS = {
  PENDING: 'en_attente',
  CONFIRMED: 'confirmée',
  CANCELLED: 'annulée',
  COMPLETED: 'complétée',
};

// Messages de notification
export const MESSAGES = {
  SUCCESS: 'Opération réussie!',
  ERROR: 'Une erreur s\'est produite',
  LOADING: 'Chargement...',
  CONFIRM_DELETE: 'Êtes-vous sûr de vouloir annuler cette réservation?',
  BOOK_SUCCESS: 'Réservation effectuée avec succès!',
  LOGIN_SUCCESS: 'Connexion réussie!',
  REGISTER_SUCCESS: 'Enregistrement réussi!',
};
