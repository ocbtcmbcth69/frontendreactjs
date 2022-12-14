import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../components/sidebar/SideBar';
import NavBarAdmin from '../components/sidebar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import AuthAdmin from '../views/admin/Auth'
import AuthCustomer from '../views/customer/Auth'
import QLChucVu from './admin/QLChucVu';
import { QLSanPham, QLLoaiMay, QLMauSac, QLChatLieu, QLThuongHieu } from './admin/QLSanPham';
import QLTaiKhoan from './admin/QLTaiKhoan';
import QLNhanVien from './admin/QLNhanVien';
import QLKhachHang from './admin/QLKhachHang';
import QLHoaDon from './admin/QLHoaDon';
import QLPhieuDatHang from './admin/QLPhieuDatHang';
import QLPhieuNhapHang from './admin/QLPhieuNhapHang';
import QLCTKhuyenMai from './admin/QLCTKhuyenMai';
import QLNhaCungCap from './admin/QLNhaCungCap';
import Login from '../components/validate/Login'
import Register from '../components/validate/Register'
import ForgotPassword from '../components/validate/ForgotPassword'
import { useState } from 'react';
import TrangChu from './customer';
import BlankPage from './customer/BlankPage';

function App() {
  const [dangnhap, setDangnhap] = useState(false)
  const title = "monkey"
  if (!dangnhap) {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<AuthAdmin setDangnhap={setDangnhap} />} />
          <Route exact path='/AuthCustomer' element={<AuthCustomer />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Register />} />
          <Route exact path='/forgotpw' element={<ForgotPassword />} />
          <Route exact path='/trang-chu' element={<TrangChu />} />
          <Route exact path='/san-pham' element={<BlankPage />} />
          <Route exact path='/dong-ho-nam' element={<BlankPage />} />
          <Route exact path='/dong-ho-nu' element={<BlankPage />} />
          <Route exact path='/thuong-hieu' element={<BlankPage />} />
          <Route exact path='/gio-hang' element={<BlankPage />} />
        </Routes>
      </Router>
    )
  }
  else
    return (
      <Router>
        <SideBar />
        <div className='content-container'>
          <Routes>
            <Route exact path='/' element={<Dashboard title={"Dashboard"} />} />
            <Route exact path='/qlchucvu' element={<QLChucVu title={"Qu???n l?? ch???c v???"} />} />
            <Route exact path='/qlsanpham' element={<QLSanPham title={"Qu???n l?? s???n ph???m"} />} />
            <Route exact path='/qlsanpham/qlloaimay' element={<QLLoaiMay title={"Qu???n l?? lo???i m??y"} />} />
            <Route exact path='/qlsanpham/qlmausac' element={<QLMauSac title={"Qu???n l?? m??u s???c"} />} />
            <Route exact path='/qlsanpham/qlchatlieu' element={<QLChatLieu title={"Qu???n l?? ch???t l?????ng"} />} />
            <Route exact path='/qlsanpham/qlthuonghieu' element={<QLThuongHieu title={"Qu???n l?? th????ng hi???u"} />} />
            <Route exact path='/qltaikhoan' element={<QLTaiKhoan title={"Qu???n l?? t??i kho???n"} />} />
            <Route exact path='/qlnhanvien' element={<QLNhanVien title={"Qu???n l?? nh??n vi??n"} />} />
            <Route exact path='/qlkhachhang' element={<QLKhachHang title={"Qu???n l?? kh??ch h??ng"} />} />
            <Route exact path='/qlhoadon' element={<QLHoaDon title={"Qu???n l?? h??a ????n"} />} />
            <Route exact path='/qlphieudathang' element={<QLPhieuDatHang title={"Qu???n l?? phi???u ?????t h??ng"} />} />
            <Route exact path='/qlphieunhaphang' element={<QLPhieuNhapHang title={"Qu???n l?? phi???u nh???p h??ng"} />} />
            <Route exact path='/qlchuongtrinhkhuyenmai' element={<QLCTKhuyenMai title={"Qu???n l?? ch????ng tr??nh khuy???n m??i"} />} />
            <Route exact path='/qlnhacungcap' element={<QLNhaCungCap title={"Qu???n l?? nh?? cung c???p"} />} />
            <Route exact path='/AuthCustomer' element={<AuthCustomer />} />
          </Routes>
        </div >
      </Router>
    );
}

export default App;
