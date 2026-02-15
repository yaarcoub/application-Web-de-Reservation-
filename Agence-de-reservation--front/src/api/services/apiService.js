import axiosInstance from '../axiosConfig';


// Service d'authentification
export const authService = {

  login: (email, password) =>
    axiosInstance.post('/auth/login', { email, password }),

  forgotPassword: (email) =>
    axiosInstance.post('/auth/request/reset', { email }),

  

  resetPasswordWithToken: ( token, newPassword) =>
    axiosInstance.post('/auth/request/change', { token, newPassword }),

  register: (userData) =>
    axiosInstance.post('/auth/register', userData),

  update : (userData) =>
    axiosInstance.patch('/update/user', userData),

  verify: (token) =>
    axiosInstance.get('/auth/verify', { params: { token } }),

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },
verify: (token) =>  
    axiosInstance.get('/auth/verify', { params: { token } }),

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  setAuthToken: (token, user) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  },
};

// Service pour les vols

export const Notification = {
  UpdateNotifications: (userId) =>
    axiosInstance.patch(`/notification/update/${userId}`),
};

// Service pour les hôtels
export const Reservation = {
  createReservation: (data) =>
    axiosInstance.post('/reservation/createPaiement', data),
};

export const serviceOffre = {
  addVolOffer: (data) =>
    axiosInstance.post('/offre-vol/create', data),

  deleteOffreVol: (id) =>
    axiosInstance.delete(`/offre-vol/delete`,{ params: { id } }),

  deleteOffreHotel: (id) =>
    axiosInstance.delete(`/offre_hotel/delete`,{ params: { id } }),

   updateOffreVol: (data) =>
    axiosInstance.patch('/offre-vol/update', data),

   updateOffreHotel: (data) =>
    axiosInstance.patch('/offre_hotel/update', data),

  addHotelOffer: (data) =>
    axiosInstance.post('/offre_hotel/create', data),
};

export const ServiceImages = {
  uploadImage: (formData) =>
    axiosInstance.post('/image/offre', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

    uploadImageuser: (formData) =>
    axiosInstance.post('/image/user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
};
   

  

