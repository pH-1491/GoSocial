import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
    const { deletePost } = useContext(PostList);

    return (
        <div className="card post-card">
            <div className="card-body">
                <h5 className="card-title">
                    <span>{post.title}</span>
                    <span
                        className="btn badge rounded-pill bg-danger hover-lift"
                        onClick={() => deletePost(post.id)}
                    >
                        <AiFillDelete />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                <div className="hashtags-container">
                    {post.tags.map((tag) => (
                        <span key={tag} className="badge hashtag hover-lift">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="alert reactions" role="alert">
                    This post has been reacted by {post.reactions} people.
                </div>
            </div>
        </div>
    );
};

export default Post;