
import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})
const Post = mongoose.model('Post', postSchema);
export default Post;