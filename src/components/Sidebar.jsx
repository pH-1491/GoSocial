const Sidebar = ({ selectedTab, setSelectedTab }) => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 sidebar"
            style={{ width: '280px' }}
        >
            {/* Enhanced Brand Section */}
            <div className="brand-container">
                <a
                    href="/"
                    className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">PostsHub</span>
                </a>
            </div>

            {/* Navigation Menu */}
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={() => setSelectedTab("Home")}>
                    <a
                        href="#"
                        className={`nav-link text-black ${selectedTab === "Home" && "active"}`}
                        data-tab="Home"
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item" onClick={() => setSelectedTab("Create Post")}>
                    <a
                        href="#"
                        className={`nav-link text-black ${selectedTab === "Create Post" && "active"}`}
                        data-tab="Create Post"
                    >
                        Create Post
                    </a>
                </li>
            </ul>

            {/* Stats Section */}
            <div className="sidebar-stats">
                <h6>Quick Stats</h6>
                <p>🚀 Posts created today</p>
                <p>💫 Active since 2024</p>
            </div>

            <hr />

            {/* Enhanced User Dropdown */}
            <div className="dropdown">
                <a
                    href="#"
                    className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt="User Avatar"
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow">
                    <li><a className="dropdown-item" href="#">📝 New project...</a></li>
                    <li><a className="dropdown-item" href="#">⚙️ Settings</a></li>
                    <li><a className="dropdown-item" href="#">👤 Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">🚪 Sign out</a></li>
                </ul>
            </div>

            {/* Footer */}
            <div className="sidebar-footer">
                <small className="text-muted">© 2024 PostsHub</small>
            </div>
        </div>
    );
};

export default Sidebar;