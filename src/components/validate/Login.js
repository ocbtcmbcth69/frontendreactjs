import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {

    const submit = (e) => {
        e.preventDefault();
        // Login
    };

    function changeAuth(newAuthMode) {
        props.changeAuth(newAuthMode);
    }

    return (
        <div className="AuthCustomer-background">
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={submit}>
                    <div className="Auth-form-content">
                        <h2 className="Auth-form-title">ĐĂNG NHẬP</h2>
                        <div className="form-group mt-3">
                            <label>Tên đăng nhập</label>
                            <input
                                type="email"
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
                        <div className="my-2 d-flex justify-content-between align-items-center">
                            <div className="form-check mt-3">
                                <label className="form-check-label text-muted">
                                    <input type="checkbox" className="form-check-input" />
                                    <i className="input-helper"></i>
                                    Giữ tôi luôn đăng nhập
                                </label>
                            </div>
                            <div className="text-end mt-3">
                                <Link className='Text-link' to={"/forgotpw"}> Quên mật khẩu? </Link>
                                {/* <span className="link-primary" onClick={() => props.changeAuth('forgotpw')}>
                                Quên mật khẩu?
                            </span> */}
                            </div>
                        </div>

                        <div className="d-grid gap-2 mt-4">
                            <button type="submit" className="btn btn-primary">
                                Đăng nhập
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            Chưa đăng ký tài khoản?{" "}
                            <Link className='Text-link' to={"/signup"}> Đăng ký </Link>
                            {/* <span className="link-primary" onClick={() => props.changeAuth('signup')}>
                                Đăng ký
                            </span> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
