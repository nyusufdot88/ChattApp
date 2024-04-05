// hämta alla meddelanden som skickats till broadcast kanalen
import path from 'path';
import { fileURLToPath } from 'url';

const getAllBroadcastMsg = (req, res) => {
	const publicPath = path.join(
		path.dirname(fileURLToPath(import.meta.url)),
		'..',
		'public',
		'index.html'
	);
	res.sendFile(publicPath);
};

// skapa ett nytt meddelande i broadcast kanalen
const createBroadcastMsg = (req, res) => {
	res.status(200).json({
		Success: true,
		msg: 'skapa ett nytt meddelande i broadcast kanalen',
	});
};

//hämtar en lista över alla kanaler
const getChannelList = (req, res) => {
	res.status(200).json({ Success: true, msg: 'hämtar en lista över kanaler' });
};

//Hämta en channel
const getChannelById = (req, res) => {
	res.status(200).json({ Success: true, msg: 'Show all broadcast' });
};

// Skapa en ny channel
const CreateNewChannel = (req, res) => {
	res.send('skapar en ny kanal. Kanalens namn ska skickas med.');
};

//Skapa nytt meddelande i en specifik kanal
const CreateMsgByChannelId = (req, res) => {
	res.send(
		'skapa ett nytt meddelande i en specifik kanal som tidigare har skapats.'
	);
};

//Ta bort en kanal
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
