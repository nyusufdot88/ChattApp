import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new mongoose.Schema({
	message: String,
	sender: String,
	timestamp: { type: Date, default: Date.now },
	channalID: { type: String },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
