package com.example.demo.Utils;

public interface UrlApp {

    String ROOT_BACKEND = "http://localhost:8081";
    String AUTH_EMAIL_VERIFY = ROOT_BACKEND + "/agence-de-Reservation/v1/auth/verify";




    String APP_ROOT = "/agence-de-Reservation/v1" ;
    //Authentification Url
    String AUTH_APP = APP_ROOT+ "/auth";
    String AUTH_LOGIN = AUTH_APP+"/login";
    String AUTH_REGISTER = AUTH_APP+"/register";
    String AUTH_VERIFY = AUTH_APP + "/verify";
    String REQUEST_PASSWORD_RESET = AUTH_APP +"/request/reset";
    String FORGET_PASSWORD_CHANGE = AUTH_APP +"/request/change";

    String UPDATE_USER = APP_ROOT +"/update/user" ;

    String OFFRE_VOL_START_POINT = APP_ROOT +"/offre-vol" ;
    String CREATE_OFFRE_VOL = OFFRE_VOL_START_POINT +"/create";
    String GET_OFFRE_VOL_BY_AIRPORT = OFFRE_VOL_START_POINT + "/{villeDepart}/{villeArrive}";
    String GET_ALL_OFFRE_VOL = OFFRE_VOL_START_POINT + "/all";
    String DELETE_OFFRE_VOL = OFFRE_VOL_START_POINT +"/delete";
    String UPDATE_OFFRE_VOL = OFFRE_VOL_START_POINT +"/update";

    String UPDATE_NOTIFICATION = APP_ROOT + "/notification/update" ;







    // les Url pour les Offres Hotel ;
    String  OFFRE_HOTEL_START_POINT  = APP_ROOT + "/offre_hotel";
    String  CREATE_OFFRE_HOTEL = OFFRE_HOTEL_START_POINT +  "/create";
    String  GET_OFFRE_HOTEL_BY_CITY  = OFFRE_HOTEL_START_POINT + "/{ville}";
    String  GET_ALL_OFFRE_HOTEL = OFFRE_HOTEL_START_POINT + "/all";
    String  DELETE_OFFRE_HOTEL = OFFRE_HOTEL_START_POINT +"/delete";
    String UPDATE_OFFRE_HOTEL = OFFRE_HOTEL_START_POINT+"/update";


    // les Url Reservation pour Offre Hotel
    String HOTEL_ENDPOINT = APP_ROOT + "/reservation-hotel";
    String CREATE_HOTEL_RESERVATION  = HOTEL_ENDPOINT + "/create" ;
    String VERIFY_VALIDE_TOKEN_HOTEL_RESERVATION = ROOT_BACKEND + HOTEL_ENDPOINT + "/verify" ;
    // les Url pour la Reservation vole
    String VOL_ENDPOINT = APP_ROOT + "/reservation-vol" ;
    String CREATE_VOL_RESERVATION = VOL_ENDPOINT + "/create";


    //URL Reservation APP
    String RESERVATION_ENDPOINTS = APP_ROOT + "/reservation";
    String CREATE_RESERVATION_PAIEMENT = RESERVATION_ENDPOINTS + "/createPaiement" ;
    String EXECUTE_RESERVATION_PAIEMENT = RESERVATION_ENDPOINTS + "/executePaiement" ;
    String CANCEL_RESERVATION_PAIEMENT   = RESERVATION_ENDPOINTS + "/cancelPaiement" ;
    String VERIFY_VALIDE_TOKEN_RESERVATION  =   RESERVATION_ENDPOINTS + "/verify" ;

    String RETURN_URL = ROOT_BACKEND + EXECUTE_RESERVATION_PAIEMENT ;
    String CANCEL_URL = ROOT_BACKEND + CANCEL_RESERVATION_PAIEMENT ;



    // images
    String OFFRE_IMAGE = APP_ROOT + "/image/offre";
    String DELETE_IMAGE = APP_ROOT + "/image/offre/delete";
    String USER_IMAGE = APP_ROOT + "/image/user";






}
