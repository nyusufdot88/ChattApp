import express from 'express';
import router from './src/router/router.js';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import Message from './src/model/messageModel.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//-----------För att connect till databasen----------------------------
const mongoDB =
	'mongodb+srv://johan1hakansson:V2SzLxUaFGj61TVk@cluster0.ftnhogo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoDB);

// Logga till konsolen om vi är anslutna till databasen
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
	console.log('En användare anslöt');

	socket.on('disconnect', () => {
		console.log('Användare kopplade från');
	});

	socket.on('chat message', (msg) => {
		const message = new Message({ message: msg, sender: 'Anonym' });
		message.save().then(() => {
			// Save the message to the database
			io.emit('chat message', msg);
		});
	});
});

//---------------------SERVER-------------------------------------------
/**Initialization */
server.listen(5000, async () => {
	console.log('Server is live✅');
});
