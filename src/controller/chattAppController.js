// hämta alla meddelanden som skickats till broadcast kanalen
import path from 'path';
import { fileURLToPath } from 'url';

//GET all messages from broadcast channel
const getAllBroadcastMsg = (req, res) => {
	const publicPath = path.join(
		path.dirname(fileURLToPath(import.meta.url)),
		'..',
		'public',
		'index.html'
	);
	res.sendFile(publicPath);
};

// POST all messages from broadcast channel
const createBroadcastMsg = (req, res) => {
	const publicPath = path.join(
		path.dirname(fileURLToPath(import.meta.url)),
		'..',
		'public',
		'index.html'
	);
	res.sendFile(publicPath);
};

//GET all channels
const getChannelList = (req, res) => {
	res.status(200).json({ Success: true, msg: 'Ny html fil' });
};

//GET a specific channel
const getChannelById = (req, res) => {
	res.status(200).json({ Success: true, msg: 'Ny html fil' });
};

// POST a specific channel
const CreateNewChannel = (req, res) => {
	res.send('skapar en ny kanal. Kanalens namn ska skickas med.');
};

//POST a specific message in a specific channel
const CreateMsgByChannelId = (req, res) => {
	res.send(
		'skapa ett nytt meddelande i en specifik kanal som tidigare har skapats.'
	);
};

//DeLETE a specific channel
const deleteChannelById = (req, res) => {
	res.send('tar bort en identiferad kanal som tidigare annonserats ut.');
};

export default {
	getAllBroadcastMsg,
	createBroadcastMsg,
	getChannelList,
	getChannelById,
	CreateNewChannel,
	CreateMsgByChannelId,
	deleteChannelById,
};
