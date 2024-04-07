import mongoose from 'mongoose';

const { Schema } = mongoose;

const channelSchema = new mongoose.Schema({
	channelName: { type: String, required: true, minLength: 1, maxLength: 20 },
	sender: String,
	timestamp: { type: Date, default: Date.now },
});

const Channel = mongoose.model('Channel', channelSchema);

export default Channel;
