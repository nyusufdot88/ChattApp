import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true, minLenght: 3 },
});

const userModel = mongoose.model('user', userSchema);

export default userModel;
