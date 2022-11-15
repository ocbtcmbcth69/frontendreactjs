import React from 'react'
import NavBarAdmin from '../../components/sidebar/NavBar'
import { Form } from 'react-bootstrap';
import TableQLNhaCungCap from '../../components/table/TableQLNhaCungCap';

export const QLSanPham = ({ title }) => {
    return (
        <div className='qlsanpham'>
            <NavBarAdmin title={title} />
            <TableQLNhaCungCap />
        </div>
    );
}

export const QLLoaiMay = ({ title }) => {
    return (
        <div className='qlsanpham'>
            <NavBarAdmin title={title} />
            <div className="page-header">
                <h1 className="page-title"> QUẢN LÝ thương hiệu </h1>
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
                            <h4 className="card-title">THÊM thương hiệu</h4>
                            <form className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Mã thương hiệu</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Tên thương hiệu</label>
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
                                                <Form.Control type="number" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                                <button className="btn btn-dark">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">DANH SÁCH thương hiệu</h4>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Mã thương hiệu </th>
                                            <th> Tên thương hiệu </th>
                                            <th> Địa chỉ </th>
                                            <th> Số điện thoại </th>
                                            <th colspan="2">...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> NCC001 </td>
                                            <td> thương hiệu A </td>
                                            <td> Địa chỉ A </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC002 </td>
                                            <td> thương hiệu B </td>
                                            <td> Địa chỉ B </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC003 </td>
                                            <td> thương hiệu C </td>
                                            <td> Địa chỉ C </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC004 </td>
                                            <td> thương hiệu D </td>
                                            <td> Địa chỉ D </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC005 </td>
                                            <td> thương hiệu E </td>
                                            <td> Địa chỉ E </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC006 </td>
                                            <td> thương hiệu F </td>
                                            <td> Địa chỉ F </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC007 </td>
                                            <td> thương hiệu G</td>
                                            <td> Địa chỉ G </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const QLMauSac = ({ title }) => {
    return (
        <div className='qlsanpham'>
            <NavBarAdmin title={title} />
            <div className="page-header">
                <h1 className="page-title"> QUẢN LÝ thương hiệu </h1>
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
                            <h4 className="card-title">THÊM thương hiệu</h4>
                            <form className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Mã thương hiệu</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Tên thương hiệu</label>
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
                                                <Form.Control type="number" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                                <button className="btn btn-dark">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">DANH SÁCH thương hiệu</h4>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Mã thương hiệu </th>
                                            <th> Tên thương hiệu </th>
                                            <th> Địa chỉ </th>
                                            <th> Số điện thoại </th>
                                            <th colspan="2">...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> NCC001 </td>
                                            <td> thương hiệu A </td>
                                            <td> Địa chỉ A </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC002 </td>
                                            <td> thương hiệu B </td>
                                            <td> Địa chỉ B </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC003 </td>
                                            <td> thương hiệu C </td>
                                            <td> Địa chỉ C </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC004 </td>
                                            <td> thương hiệu D </td>
                                            <td> Địa chỉ D </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC005 </td>
                                            <td> thương hiệu E </td>
                                            <td> Địa chỉ E </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC006 </td>
                                            <td> thương hiệu F </td>
                                            <td> Địa chỉ F </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC007 </td>
                                            <td> thương hiệu G</td>
                                            <td> Địa chỉ G </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const QLChatLieu = ({ title }) => {
    return (
        <div className='qlsanpham'>
            <NavBarAdmin title={title} />
            <div className="page-header">
                <h1 className="page-title"> QUẢN LÝ thương hiệu </h1>
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
                            <h4 className="card-title">THÊM thương hiệu</h4>
                            <form className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Mã thương hiệu</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Tên thương hiệu</label>
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
                                                <Form.Control type="number" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                                <button className="btn btn-dark">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">DANH SÁCH thương hiệu</h4>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Mã thương hiệu </th>
                                            <th> Tên thương hiệu </th>
                                            <th> Địa chỉ </th>
                                            <th> Số điện thoại </th>
                                            <th colspan="2">...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> NCC001 </td>
                                            <td> thương hiệu A </td>
                                            <td> Địa chỉ A </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC002 </td>
                                            <td> thương hiệu B </td>
                                            <td> Địa chỉ B </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC003 </td>
                                            <td> thương hiệu C </td>
                                            <td> Địa chỉ C </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC004 </td>
                                            <td> thương hiệu D </td>
                                            <td> Địa chỉ D </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC005 </td>
                                            <td> thương hiệu E </td>
                                            <td> Địa chỉ E </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC006 </td>
                                            <td> thương hiệu F </td>
                                            <td> Địa chỉ F </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC007 </td>
                                            <td> thương hiệu G</td>
                                            <td> Địa chỉ G </td>
                                            <td> 123456789 </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const QLThuongHieu = ({ title }) => {
    return (
        <div className='qlsanpham'>
            <NavBarAdmin title={title} />
            <div className="page-header">
                <h1 className="page-title"> QUẢN LÝ THƯƠNG HIỆU </h1>
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
                            <h4 className="card-title">THÊM THƯƠNG HIỆU</h4>
                            <form className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Mã thương hiệu</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Tên thương hiệu</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                                <button className="btn btn-dark">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">DANH SÁCH THƯƠNG HIỆU</h4>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Mã thương hiệu </th>
                                            <th> Tên thương hiệu </th>
                                            <th colspan="2">...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 001 </td>
                                            <td> Thương hiệu A </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC002 </td>
                                            <td> Thương hiệu B </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC003 </td>
                                            <td> Thương hiệu C </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC004 </td>
                                            <td> Thương hiệu D </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC005 </td>
                                            <td> Thương hiệu E </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC006 </td>
                                            <td> Thương hiệu F </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                        <tr>
                                            <td> NCC007 </td>
                                            <td> Thương hiệu G</td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Sửa</button> </td>
                                            <td> <button type="button" className="btn btn-link" style={{textDecoration: 'none'}}>Xóa</button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}