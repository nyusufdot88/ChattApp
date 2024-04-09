import express from 'express';
import router from './src/router/router.js';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import Message from './src/model/messageModel.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//-----------To connect to the db----------------------------
const mongoDB =
	'mongodb+srv://johan1hakansson:V2SzLxUaFGj61TVk@cluster0.ftnhogo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
	console.log('Connected to MongoDB✅');
});

//---------------------------ROUTER--------------------------------------
app.use(express.json());
//mount router
app.use('/', router);
app.use(express.static('public')); //mount static folder

//------------------// Hantera Socket.IO-anslutningar-----------------------------
io.on('connection', (socket) => {
	console.log('En användare anslöt till socket.io✅');

	socket.on('disconnect', () => {
		console.log('Användare kopplade från ❌');
	});

	// Sends all the messages to all connected clients
	Message.find({}).then((messages) => {
		// console.log('Hämtade alla meddelanden:', messages);
		socket.emit('load all messages', messages);
	});

	socket.on('chat message', (data) => {
		const message = new Message({
			message: data.msg,
			sender: data.sender,
		});
		message
			.save()
			.then(() => {
				// When the message is saved, send it to all connected clients
				io.emit('chat message', {
					msg: message.message,
					sender: message.sender,
					timestamp: message.timestamp,
				});
			})
			.catch((err) => {
				console.error('Fel vid sparning av meddelande:', err);
			});
	});
});

//---------------------SERVER-------------------------------------------
/**Initialization */
server.listen(5000, async () => {
	console.log('Server is live✅');
});
