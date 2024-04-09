import express from 'express';
import chattAppController from '../controller/chattAppController.js';

const router = express.Router();

// Redirect root to broadcast API
router.get('/', (req, res) => {
	res.redirect('/api/broadcast');
});

// Route for getting all messages from broadcast channel
router.get('/api/broadcast', chattAppController.getAllBroadcastMsg);

// Route for getting the list of all channels
router.get('/api/channel/', chattAppController.getChannelList);

// Route for creating a new channel
router.post('/api/channel', chattAppController.createChannel);

// Route for getting all messages from a specific channel by ID
router.get('/api/channel/:id/', chattAppController.getMessagesByChannelId);

// Route for creating a message in a specific channel
router.post(
	'/api/channel/:channelId/message',
	chattAppController.createMessageInChannel
);

export default router;
