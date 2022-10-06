const mongoose = require('mongoose');

const MsgSentSchema = new mongoose.Schema({
    messaging_product: {
        type: String,
        required: true
    },
    display_phone_number: {
        type: String,
        required: true
    },
    phone_number_id: {
        type: String,
        required: true
    },
    wa_mid: {
        type: String,
        required: true
    },
    message_text:{
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    media_id: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
  });

  module.exports =SentMessages= mongoose.model('sentmessages', MsgSentSchema);