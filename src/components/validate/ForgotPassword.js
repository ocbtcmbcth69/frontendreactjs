import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword(props) {

    const submit = (e) => {
        e.preventDefault();
        // Gửi mail reset
    };

    function changeAuth(newAuthMode) {
        props.changeAuth(newAuthMode);
    }

    return (
        <div className="AuthCustomer-background">
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={submit}>
                    <div className="Auth-form-content">
                        <h2 className="Auth-form-title">QUÊN MẬT KHẨU?</h2>
                        <div className="form-group mt-3">
                            <label>Đừng lo! Hãy nhập email thuộc về tài khoản của bạn để chúng tôi tiến hành gửi đường dẫn khôi phục mật khẩu.</label>
                            <input
                                type="email"
                                className="form-control text-center mt-3"
                                placeholder="Nhập email"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                KHÔI PHỤC MẬT KHẨU
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            Đã nhớ lại mật khẩu?{" "}
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
