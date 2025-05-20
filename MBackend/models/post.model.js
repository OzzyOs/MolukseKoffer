import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

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
    timestamps: true, // createdAt, updatedAt
    _id: false
})

PostSchema.plugin(AutoIncrement, {inc_field : 'id'})

const Post = mongoose.model('Post', PostSchema);

export default Post;