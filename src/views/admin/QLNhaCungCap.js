import React, { useState } from 'react';
import NavBarAdmin from '../../components/sidebar/NavBar'
import BootstrapTable from "react-bootstrap-table-next";
import { Form, Button } from 'react-bootstrap';
import { HiSearch } from "react-icons/hi";
import TableQLNhaCungCap from '../../components/table/TableQLNhaCungCap';
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css';

const QLNhaCungCap = ({ title }) => {
    const [showForm, setShowForm] = useState(false);

    const options = {
        title: 'Title',
        message: 'Message',
        buttons: [
            {
                label: 'Yes',
                onClick: () => alert('Click Yes')
            },
            {
                label: 'No',
                onClick: () => alert('Click No')
            }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        willUnmount: () => { },
        afterClose: () => { },
        onClickOutside: () => { },
        onKeypress: () => { },
        onKeypressEscape: () => { },
        overlayClassName: "overlay-custom-class-name"
    };

    const submit = (e) => {
        e.preventDefault();
        /*confirmAlert({
            title: 'THÊM NHÀ CUNG CẤP',
            message: 'Bạn chắc chắn muốn thêm nhà cung cấp?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => { }
                },
                {
                    label: 'Không',
                    onClick: () => { }
                }
            ]
        });*/
    };

    const find = (e) => {
        e.preventDefault();
    }

    return (
        <div className='qlnhacungcap'>
            <NavBarAdmin title={title} />
            <div className="page-header">
                <h1 className="page-title"> QUẢN LÝ NHÀ CUNG CẤP </h1>
                {/*<nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li> 
                        <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
                    </ol>
                </nav>*/}
            </div>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <React.Fragment>
                                {
                                    showForm ? <><h4 className="card-title">THÊM NHÀ CUNG CẤP</h4>
                                        <form className="form-sample" onSubmit={submit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Group className="row">
                                                        <label className="col-sm-3 col-form-label">Mã nhà cung cấp</label>
                                                        <div className="col-sm-9">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="row">
                                                        <label className="col-sm-3 col-form-label">Tên nhà cung cấp</label>
                                                        <div className="col-sm-9">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Group className="row">
                                                        <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                                        <div className="col-sm-9">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="row">
                                                        <label className="col-sm-3 col-form-label">Số điện thoại</label>
                                                        <div className="col-sm-9">
                                                            <Form.Control type="tel" />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                                            <button type="reset" className="btn btn-dark">Reset</button>
                                            <button className="btn btn-dark" onClick={() => setShowForm(false)}>Cancel</button>
                                        </form> </> : <button className="btn btn-dark" onClick={() => setShowForm(true)}> THÊM NHÀ CUNG CẤP </button>
                                }
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">DANH SÁCH NHÀ CUNG CẤP</h4>
                            <form className="form-inline" onSubmit={find}>
                                <Form.Group className="row">
                                    <label className="col-sm-1 col-form-label">Tìm kiếm</label>
                                    <div className="col-sm-3">
                                        <Form.Control type="text" placeholder='Nhập tên nhà cung cấp' />
                                    </div>
                                    <Button variant="dark" className="col-sm-1" type="submit">
                                        <HiSearch />
                                    </Button>
                                </Form.Group>
                            </form>

                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Mã nhà cung cấp </th>
                                            <th> Tên nhà cung cấp </th>
                                            <th> Địa chỉ </th>
                                            <th> Số điện thoại </th>
                                            <th colspan="2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> NCC001 </td>
                                            <td> Nhà cung cấp A </td>
                                            <td> Địa chỉ A </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC002 </td>
                                            <td> Nhà cung cấp B </td>
                                            <td> Địa chỉ B </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC003 </td>
                                            <td> Nhà cung cấp C </td>
                                            <td> Địa chỉ C </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC004 </td>
                                            <td> Nhà cung cấp D </td>
                                            <td> Địa chỉ D </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC005 </td>
                                            <td> Nhà cung cấp E </td>
                                            <td> Địa chỉ E </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC006 </td>
                                            <td> Nhà cung cấp F </td>
                                            <td> Địa chỉ F </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC007 </td>
                                            <td> Nhà cung cấp G</td>
                                            <td> Địa chỉ G </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Xóa</button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <TableQLNhaCungCap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QLNhaCungCap