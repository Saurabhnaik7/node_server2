const express = require('express');
//const axios = require('axios');
//const config = require('config');
const router = express.Router();
const Messages = require('../../models/Messages');
const SentMessages = require('../../models/SentMessages');

// @route    GET api/message
// @desc     Get all messages
// @access   Public
router.get('/', async (req, res) => {
    try {
        const msg = await Messages.find();
        res.json(msg);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  });

// @route    GET api/message/sent
// @desc     Get all messages
// @access   Public
router.get('/sent', async (req, res) => {
    try {
        const sentmsg = await SentMessages.find();
        res.json(sentmsg);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  });

  module.exports = router;