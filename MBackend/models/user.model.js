import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, 
    {
        timestamps: true // createdAt, updatedAt
    })

UserSchema.plugin(AutoIncrement, {inc_field: 'id'});

const User = mongoose.model('User', UserSchema);

export default User;