// Import necessary modules
import path from 'path';
import { fileURLToPath } from 'url';
import Channel from '../model/channelModel.js';
import Message from '../model/messageModel.js';

// Function to get all messages from broadcast channel
const getAllBroadcastMsg = (req, res) => {
	// Get the public path for the index.html file
	const publicPath = path.join(
		path.dirname(fileURLToPath(import.meta.url)),
		'..',
		'public',
		'index.html'
	);
	res.sendFile(publicPath, (err) => {
		if (err) {
			console.error('Failed to send file:', err);
			res.status(500).send('Server Error: Could not send file.');
		}
	});
};

/// Channel code start

// Function to get the list of all channels
const getChannelList = async (req, res) => {
	try {
		// Fetch all channels from the database
		const channels = await Channel.find();

		// Check if there are any channels
		if (!channels || channels.length === 0) {
			return res
				.status(404)
				.json({ success: false, message: 'No channels found' });
		}

		// Return the list of channels as a JSON response
		res.status(200).json({ success: true, channels: channels });
	} catch (error) {
		// Handle errors
		console.error(error);
		res.status(500).json({ success: false, message: 'Server Error' });
	}
};

// Function to create a new channel
const createChannel = async (req, res) => {
	try {
		// Extract channel name from request body
		const { channelName } = req.body;

		// Check if the channel name is provided
		if (!channelName) {
			return res
				.status(400)
				.json({ success: false, message: 'Channel name is required' });
		}

		// Create a new channel instance
		const newChannel = new Channel({
			channelName: channelName,
		});

		// Save the new channel to the database
		const savedChannel = await newChannel.save();

		// Return the newly created channel as a JSON response
		res.status(201).json({ success: true, channel: savedChannel });
	} catch (error) {
		// Handle errors
		console.error(error);
		res.status(500).json({ success: false, message: 'Server Error2' });
	}
};

/// Channel code end

// Function to get all messages from a specific channel by ID
const getMessagesByChannelId = async (req, res) => {
	try {
		const { id } = req.params; // Extract channel ID from request params

		// Query all messages from the database that belong to the specified channel ID
		const messages = await Message.find({ channelID: id });

		// Check if there are any messages
		if (!messages || messages.length === 0) {
			return res
				.status(404)
				.json({ success: false, message: 'No messages found for the channel' });
		}

		// Return the list of messages as a JSON response
		res.status(200).json({ success: true, messages: messages });
	} catch (error) {
		// Handle errors
		console.error(error);
		res.status(500).json({ success: false, message: 'Server Error' });
	}
};

// Function to create a message in a specific channel
const createMessageInChannel = async (req, res) => {
	try {
		const { channelId } = req.params; // Extract channelId from request params
		const { message } = req.body; // Extract message from request body

		// Check if both channelId and message are provided
		if (!channelId || !message) {
			return res.status(400).json({
				success: false,
				message: 'Channel ID and message are required',
			});
		}

		// Create a new message instance
		const newMessage = new Message({
			message: message,
			channelID: channelId,
		});

		// Save the new message to the database
		const savedMessage = await newMessage.save();

		// Return the newly created message as a JSON response
		res.status(201).json({ success: true, message: savedMessage });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: 'Server Error' });
	}
};

export default {
	getAllBroadcastMsg,
	getChannelList,
	createChannel,
	createMessageInChannel,
	getMessagesByChannelId,
};
