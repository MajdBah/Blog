const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({

    content: {
        type: String,
        required: true
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    created_at: {
        type: Date,
        default: Date.now
    },
});

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    comments: [
        CommentsSchema
    ],

    created_at: {
        type: Date,
        default: Date.now
    },

});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;