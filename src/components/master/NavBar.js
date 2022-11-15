import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        /* {!simple && ( */
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container">
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/trang-chu" className="nav-link">Trang Chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/san-pham" className="nav-link">Tất cả sản phẩm</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dong-ho-nam" className="nav-link">Nam</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dong-ho-nu" className="nav-link">Nữ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/thuong-hieu" className="nav-link">Thương hiệu</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        /* )} */
    );
}