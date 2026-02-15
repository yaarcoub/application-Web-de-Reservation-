// Validateurs pour formulaires
export const validators = {
  // Email
  email: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email est obligatoire';
    if (!regex.test(email)) return 'Email invalide';
    return null;
  },

  // Mot de passe
  password: (password) => {
    if (!password) return 'Mot de passe est obligatoire';
    if (password.length < 6) return 'Le mot de passe doit contenir au moins 6 caractères';
    if (!/[A-Z]/.test(password)) return 'Le mot de passe doit contenir une majuscule';
    if (!/[0-9]/.test(password)) return 'Le mot de passe doit contenir un chiffre';
    return null;
  },

  // Confirmation mot de passe
  confirmPassword: (password, confirmPassword) => {
    if (!confirmPassword) return 'Confirmez votre mot de passe';
    if (password !== confirmPassword) return 'Les mots de passe ne correspondent pas';
    return null;
  },

  // Nom
  name: (name) => {
    if (!name) return 'Le nom est obligatoire';
    if (name.length < 2) return 'Le nom doit contenir au moins 2 caractères';
    return null;
  },

  // Téléphone
  phone: (phone) => {
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phone) return 'Le téléphone est obligatoire';
    if (!regex.test(phone)) return 'Numéro de téléphone invalide';
    return null;
  },

  // Date
  date: (date) => {
    if (!date) return 'La date est obligatoire';
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) return 'La date ne peut pas être dans le passé';
    return null;
  },

  // Nombre de passagers
  passengers: (count) => {
    if (!count) return 'Le nombre de passagers est obligatoire';
    if (count < 1 || count > 9) return 'Le nombre de passagers doit être entre 1 et 9';
    return null;
  },

  // Villes
  cities: (departure, arrival) => {
    if (!departure) return 'Veuillez sélectionner une ville de départ';
    if (!arrival) return 'Veuillez sélectionner une ville d\'arrivée';
    if (departure === arrival) return 'Les villes de départ et d\'arrivée doivent être différentes';
    return null;
  },
};

// Hook de validation
export const useFormValidation = (initialValues, onSubmit) => {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const setFieldValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const setFieldError = (name, error) => {
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
  };
};
