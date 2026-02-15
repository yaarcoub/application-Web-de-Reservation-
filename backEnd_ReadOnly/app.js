const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();
const ActiveMQListener = require('./Service/ActiveMQ');
const offreVol  = require('./routes/OffreVolRout');
const offreHotel  = require('./routes/OffreHotelRout');
const Reservation  = require('./routes/ReservationRout');
const Notification  = require('./routes/NotificationRout');
const  cors = require('cors');


const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', offreVol);
app.use('/api/v1', offreHotel);
app.use('/api/v1', Reservation);
app.use('/api/v1', Notification);






const start = async ()=>{
  ActiveMQListener.connect().catch(error => {
  console.error(' Impossible de se connecter à ActiveMQ:', error);
  
 });
   
   try {
   await connectDB(process.env.URL_MONGODB)


   app.listen(process.env.PORT || 4000,()=>{console.log('port 4000 listen')}) 
   } catch (e) {
    
     console.log(e);

   }

}

start();