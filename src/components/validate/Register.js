import React from 'react';
import { Link } from 'react-router-dom';

export default function Register(props) {

    const submit = (e) => {
        e.preventDefault();
        // Register
    };

    function changeAuth(newAuthMode) {
        props.changeAuth(newAuthMode);
    }

    return (
        <div className="AuthCustomer-background">
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={submit}>
                    <div className="Auth-form-content">
                        <h2 className="Auth-form-title">ĐĂNG KÝ</h2>
                        <div className="form-group mt-3">
                            <label>Tên đăng nhập</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nhập tên đăng nhập"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Mật khẩu</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Nhập mật khẩu"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nhập lại mật khẩu</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Nhập lại mật khẩu"
                            />
                        </div>
                        <div className="form-check mt-3">
                            <label className="form-check-label text-muted">
                                <input type="checkbox" className="form-check-input" />
                                <i className="input-helper"></i>
                                Tôi đồng ý với điều khoản và chính sách của cửa hàng
                            </label>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Đăng ký
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            Đã đăng ký tài khoản?{" "}
                            <Link className='Text-link' to={"/login"}> Đăng nhập </Link>
                            {/* <span className="link-primary" onClick={() => props.changeAuth('login')}>
                                Đăng nhập
                            </span> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
