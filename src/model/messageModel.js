import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new mongoose.Schema({
	message: { type: String, required: true, minLength: 1, maxLength: 100 },
	sender: String,
	timestamp: { type: Date, default: Date.now },
	channalID: { type: String },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;