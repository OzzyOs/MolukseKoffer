import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    author: String,
}, {
    timestamps: true // createdAt, updatedAt
})

const Post = mongoose.model('Post', PostSchema);

export default Post;