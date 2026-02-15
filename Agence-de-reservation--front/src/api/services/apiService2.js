
import axiosInstance from '../axiosConfig2';




export const ServiceAffichage = {
   getOffers: (params) =>
    axiosInstance.get('/offre-hotel', { params }),

   getAllOffersHotel: () =>
    axiosInstance.get('/offres-hotel/all'),

   getOfferHotelById: (id) =>
    axiosInstance.get(`/offres-hotel/${id}`),

     getAllOffersVol: () =>
    axiosInstance.get('/offres-vol/all'),
  
     getOffersVolbyId: (params) =>
    axiosInstance.get(`/offres-vol/${params}`),

     getNotifications: (id) =>
    axiosInstance.get(`/Notification/${id}`),


     getReservationInfo: (id) =>
    axiosInstance.get(`Reservation/all`),

     getReservationInfoVol:() =>
    axiosInstance.get(`/Reservation/stats-vol`),

     getReservationInfoHotel:() =>
    axiosInstance.get(`/Reservation/stats-hotel`),

};