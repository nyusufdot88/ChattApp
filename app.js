import express from 'express';
import router from './src/router/router.js';
import mongoose from 'mongoose';

const app = express();

//För att connect till databasen.
const mongoDB =
	'mongodb+srv://johan1hakansson:V2SzLxUaFGj61TVk@cluster0.ftnhogo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoDB);

// Logga till konsolen om vi är anslutna till databasen
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
	console.log('Connected to MongoDB✅');
});

app.use(express.json());

//mount router
app.use('/', router);

/**Initialization */
app.listen(5000, async () => {
	console.log('Server is live✅');
});

//Test//
