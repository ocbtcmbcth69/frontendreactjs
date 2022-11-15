import { Link } from "react-router-dom";
import '../../styles/Master.scss'
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavBar from "./NavBar";

export default function Header({ cartNumber }) {
    const handleSearch = (e) => {
        e.preventDefault();
        //
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container">
                    <Link to="/trang-chu">
                        <a className="navbar-brand">
                            {/* <FontAwesomeIcon
                icon={["fas", "shopping-basket"]}
                className="d-inline-block"
              /> */}
                            <span className="ms-2 mb-0 h4 text-primary fw-bold" >
                                WatchStore
                            </span>
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <form className="d-flex" onSubmit={handleSearch}>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Nhập tên sản phẩm"
                                    aria-label="Search"
                                    size="50"
                                />
                                <button type="submit" className="btn btn-primary">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex">
                        {/* {!hideAuth && (
                        <>

                            <Link to="/login">
                                <a className="btn btn-outline-primary d-none d-md-block ms-2">
                                    Login
                                </a>
                            </Link>
                            <Link to="/signup">
                                <a className="btn btn-outline-primary d-none d-md-block ms-2">
                                    Sign up
                                </a>
                            </Link>
                        </>
                        )} */}
                        <Link to="/login" className="d-flex" style={{ color: "black", alignItems: "center" }}>
                            <FavoriteIcon />
                        </Link>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-3">
                            <li className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-toggle="dropdown"
                                    id="userDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span><i className="fa fa-user"></i> User </span>

                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="userDropdown"
                                >
                                    <li>
                                        <Link to="/login" className="dropdown-item">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className="dropdown-item">
                                            Sign Up
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <Link to="/gio-hang">
                            <a className="btn btn-light position-relative ms-2 fw-normal">
                                <i class="fa fa-shopping-cart"></i>
                                &nbsp;Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger my-auto">
                                    {cartNumber}
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            <NavBar />
        </header>
    );
}
