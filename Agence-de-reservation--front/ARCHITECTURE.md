# Booking App - Architecture et Documentation

## 📁 Structure du Projet

```
src/
├── api/                          # Services API
│   ├── axiosConfig.js           # Configuration Axios centralisée
│   └── services/
│       └── apiService.js        # Services API par domaine
│
├── features/                     # Organisé par domaine
│   ├── auth/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
│   ├── flights/
│   │   ├── components/
│   │   └── pages/
│   ├── hotels/
│   │   ├── components/
│   │   └── pages/
│   ├── tours/
│   │   ├── components/
│   │   └── pages/
│   └── cabs/
│       ├── components/
│       └── pages/
│
├── components/                   # Composants réutilisables
│   └── common/
│       └── Header.jsx           # Composant Header amélioré
│
├── store/                        # State Management
│   ├── AuthContext.jsx          # Contexte d'authentification
│   └── ThemeContext.jsx         # Contexte de thème (déjà existant)
│
├── hooks/                        # Hooks personnalisés
│   ├── useCustomHooks.js        # Hooks réutilisables
│   ├── useDropdown.js           # Dropdown hook
│   ├── useGuestSelector.js      # Guest selector hook
│   └── useNotifications.js      # Notifications hook
│
├── utils/                        # Utilitaires
│   └── validators/
│       └── formValidators.js    # Validateurs de formulaires
│
├── constants/                    # Constantes globales
│   └── appConstants.js          # Routes, messages, données
│
├── context/                      # Contextes
│   └── ThemeContext.jsx         # Gestion du thème
│
├── styles/                       # CSS global
│   └── style.css
│
├── App.jsx                       # Composant racine
├── main.jsx                      # Point d'entrée
├── index.css
└── index.js
```

---

## 🚀 Démarrage Rapide

### Installation
```bash
npm install
# ou avec yarn
yarn install
```

### Variables d'environnement
Copiez `.env.example` en `.env.local` et remplissez les valeurs:
```bash
cp .env.example .env.local
```

### Développement
```bash
npm run dev
```

### Build Production
```bash
npm run build
```

---

## 📚 Services API

Tous les appels API sont centralisés dans `src/api/services/apiService.js`:

### Service d'Authentification
```javascript
import { authService } from '@/api/services/apiService';

await authService.login(email, password);
await authService.register(userData);
await authService.logout();
```

### Services de Réservation
```javascript
import { flightsService, hotelsService, toursService, cabsService } from '@/api/services/apiService';

// Exemple pour les vols
await flightsService.getOffers(departure, arrival);
await flightsService.createReservation(data);
```

---

## 🔐 Authentification

### Utiliser le contexte d'authentification
```javascript
import { useAuth } from '@/store/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout, isLoading, error } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <p>Bienvenue, {user.name}!</p>
      ) : (
        <p>Veuillez vous connecter</p>
      )}
    </div>
  );
}
```

### Le contexte d'authentification gère:
- ✅ Login avec token JWT
- ✅ Registration
- ✅ Logout
- ✅ Persistance du token (localStorage)
- ✅ Actualisation automatique du token

---

## 🎨 Thème (Light/Dark/Auto)

```javascript
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { theme, setLightTheme, setDarkTheme, setAutoTheme } = useTheme();

  return (
    <div>
      <button onClick={setLightTheme}>Light</button>
      <button onClick={setDarkTheme}>Dark</button>
      <button onClick={setAutoTheme}>Auto</button>
    </div>
  );
}
```

---

## ✅ Validation des Formulaires

```javascript
import { validators, useFormValidation } from '@/utils/validators/formValidators';

// Validation simple
const emailError = validators.email('user@example.com');

// Avec hook
const form = useFormValidation(
  { email: '', password: '' },
  async (values) => {
    // Soumettre le formulaire
  }
);

<form onSubmit={form.handleSubmit}>
  <input 
    name="email"
    value={form.values.email}
    onChange={form.handleChange}
    onBlur={form.handleBlur}
  />
  {form.touched.email && form.errors.email && (
    <span>{form.errors.email}</span>
  )}
</form>
```

---

## 🪝 Hooks Personnalisés

### useApi
Gérer les requêtes asynchrones:
```javascript
const { execute, status, value, error } = useApi(apiFunction);
```

### useLocalStorage
Persistance en localStorage:
```javascript
const [value, setValue] = useLocalStorage('key', initialValue);
```

### usePagination
Pagination simple:
```javascript
const { currentPage, totalPages, currentItems, goToPage } = usePagination(items, 10);
```

---

## 🔌 Routes Disponibles

Les routes sont centralisées dans `src/constants/appConstants.js`:

| Route | Description |
|-------|-------------|
| `/` | Accueil |
| `/flights` | Recherche de vols |
| `/hotels` | Recherche d'hôtels |
| `/tours` | Recherche de tours |
| `/cabs` | Recherche de taxis |
| `/about` | À propos |
| `/contact` | Contact |
| `/sign-in` | Connexion |
| `/sign-up` | Inscription |
| `/my-bookings` | Mes réservations |

---

## 📋 Constantes Globales

Accédez aux constantes depuis `src/constants/appConstants.js`:

```javascript
import { ROUTES, FLIGHT_CLASSES, POPULAR_CITIES, MESSAGES } from '@/constants/appConstants';

// Utiliser les constantes
<Link to={ROUTES.FLIGHTS}>Vols</Link>
```

---

## 🔧 Configuration Environnement

### .env.development
```env
VITE_API_BASE_URL=http://localhost:8081/agence-de-Reservation/v1
VITE_ENABLE_DEBUG=true
VITE_ENABLE_ANALYTICS=false
```

### .env.production
```env
VITE_API_BASE_URL=https://api.booking-app.com/v1
VITE_ENABLE_DEBUG=false
VITE_ENABLE_ANALYTICS=true
```

---

## 📦 Conventions de Nommage

| Type | Convention | Exemple |
|------|-----------|---------|
| Components | PascalCase | `FlightSearch.jsx` |
| Hooks | camelCase + "use" | `useFlights.js` |
| Services | camelCase + "Service" | `flightService.js` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Files (CSS) | kebab-case | `flight-search.css` |

---

## 🚦 État du Projet

- ✅ Architecture modulaire
- ✅ Services API centralisés
- ✅ State Management (Context)
- ✅ Authentification JWT
- ✅ Validation des formulaires
- ✅ Gestion du thème
- ✅ Hooks personnalisés
- ✅ Variables d'environnement

---

## 🤝 Contribuer

1. Créez une branche pour votre feature: `git checkout -b feature/my-feature`
2. Commitez vos changements: `git commit -am 'Add new feature'`
3. Pushez la branche: `git push origin feature/my-feature`
4. Créez une Pull Request

---

## 📝 License

Propriétaire - Tous droits réservés
