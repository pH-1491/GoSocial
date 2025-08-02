import './App.css';  // ← This line imports the CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Heading from "./components/Heading.jsx";
import Sidebar from "./components/Sidebar.jsx";
import PostList from "./components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "./store/post-list-store.jsx";
import CreatePost from "./components/CreatePost.jsx";

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <PostListProvider>
            <div className="App d-flex">
                <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <div className="main p-3 w-100">
                    <Heading />
                    {selectedTab === "Home" ? (
                        <PostList></PostList>
                    ) : (
                        <CreatePost></CreatePost>
                    )}
                </div>
            </div>
        </PostListProvider>
    );
}

export default App;