const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = mongoos.model('User', UserSchema);

module.exports = User;