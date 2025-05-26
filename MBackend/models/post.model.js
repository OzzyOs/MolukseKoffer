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
})

PostSchema.plugin(AutoIncrement, {inc_field : 'post_id'})

const Post = mongoose.model('Post', PostSchema);

export default Post;