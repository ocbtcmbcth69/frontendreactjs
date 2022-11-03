import React from "react"
import axios from "axios"
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { numberFilter, textFilter, dateFilter, selectFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import '../../styles/Table.scss';
import Moment from 'moment';

function gioitinhFormatter(cell, row) {// Hiển thị Nam hoặc Nữ ở object giới tính
    if (row.gioitinh === 1) {
        return (
            <>Nam</>
        );
    }
    return (
        <>Nữ</>
    );
}

const gioitinhOptions = {
    0: 'Nữ',
    1: 'Nam'
}

function dateFormatter(cell, row) {
    const formatDate = Moment(row.ngaysinh).format('DD-MM-YYYY');
    return (
        <>{formatDate}</>
    )
}

const columns = [
    {
        dataField: 'idnhanvien',
        text: 'ID Nhân Viên',
        sort: true,
        filter: textFilter({
            placeholder: 'Tìm ID Nhân Viên'
        })
    },
    {
        dataField: 'idtaikhoan',
        text: 'ID Tài Khoản',
        sort: true,
        filter: textFilter({
            placeholder: 'Tìm ID Tài Khoản'
        })
    },
    {
        dataField: 'hoten',
        text: 'Họ và tên',
        sort: true,
        filter: textFilter({
            placeholder: 'Tìm Họ và Tên'
        })
    },
    {
        dataField: 'gioitinh',
        text: 'Giới tính',
        sort: true,
        formatter: gioitinhFormatter,
        filter: selectFilter({
            options: gioitinhOptions
        })
    },
    {
        dataField: 'ngaysinh',
        text: 'Ngày sinh',
        sort: true,
        filter: dateFilter(),
        formatter: dateFormatter
    },
    {
        dataField: 'sdt',
        text: 'Số điện thoại',
        sort: true,
        filter: numberFilter()
    },
    {
        dataField: 'diachi',
        text: 'Địa chỉ',
        sort: true,
        filter: textFilter()
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
        filter: textFilter()
    },
    {
        dataField: 'ngayvaolam',
        text: 'Ngày vào làm',
        sort: true,
        filter: dateFilter()
    },
    {
        dataField: 'luong',
        text: 'Lương',
        sort: true,
        filter: numberFilter()
    }
];

const defaultSorted = [{
    dataField: 'name',
    order: 'desc'//thứ tự từ cao đến thấp
}];

const selectRow = {//chọn dòng sẽ tô màu
    mode: 'checkbox',
    clickToSelect: true,
    style: { backgroundColor: '#c8e6c9' }
};

class TableQLNhanVien extends React.Component {
    state = {
        list: []
    }

    async componentDidMount() {
        //https://dummy.restapiexample.com/api/v1/employees
        //https://reqres.in/api/users?page=2
        //https://dummyjson.com/users
        let res = await axios.get("http://localhost:8000/api/nv/");
        console.log('check res: ', res.data.data)
        this.setState({
            list: res && res.data && res.data.data ? res.data.data : []
        })
    }

    //https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-pagination.html
    //Bootstrap phân trang React
    render() {
        return (
            <div className="bg-white">
                <BootstrapTable
                    striped
                    hover
                    keyField="id"
                    data={this.state.list}//dữ liệu
                    columns={columns}//tiêu đề
                    pagination={paginationFactory({ sizePerPage: 10 })}//phân trang
                    selectRow={selectRow}//bấm để chọn
                    defaultSorted={defaultSorted}
                    filter={filterFactory()}
                />
            </div>
        )
    }
}

export default TableQLNhanVien