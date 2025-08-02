import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going to Mumbai",
        body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
        reactions: 2,
        userId: "user-9",
        tags: ["vacation", "Mumbai", "Enjoying"],
    },
    {
        id: "2",
        title: "Paas ho bhai",
        body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
        reactions: 15,
        userId: "user-12",
        tags: ["Graduating", "Unbelievable"],
    },
];

const postListReducer = (currPostList, action) => {
    switch (action.type) {
        case "DELETE_POST":
            return currPostList.filter((post) => post.id !== action.payload.postId);
        case "ADD_POST":
            return [action.payload, ...currPostList];
        default:
            return currPostList;
    }
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now().toString(),
                title: postTitle,
                body: postBody,
                reactions,
                userId,
                tags,
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({ type: "DELETE_POST", payload: { postId } });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
