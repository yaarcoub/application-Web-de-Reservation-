const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
  {
    // ID logique (si tu synchronises avec un autre service Java)
    _id: {
      type: Number,
      required: true,
    },

    clientId: {
      type: Number,
      required: true,
    },

    message: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    notificationType: {
      type: String,
      required: true,
      enum: [
        "NEW_OFFRE",
    "NEW_RESERVATION",
        "NEW_PAYMENT",
      ]
    },


    reference: {
      type: String,
      required: true,
      index: true
    },

    lu: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true // createdAt & updatedAt automatiques
  }
);


module.exports = mongoose.model('Notification', NotificationSchema);
