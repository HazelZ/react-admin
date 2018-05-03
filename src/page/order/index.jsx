import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PageTitle from 'component/_pageTitle/index';
import Pagination from 'utils/pagination/index';
import TableList from 'utils/tableList/index';
import MUtil from 'utils/mutil';
import Order from 'service/orderService';
import ListSearch from './index-list-search';

const _mutil = new MUtil();
const _order = new Order();

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      listType: 'list'  //list /search
    }
  }

  componentDidMount() {
    this._loadOrderList();
  }

  _loadOrderList() {
    let listParam = {};
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;

    //如果是搜索的话，需要传入搜索类型和搜索关键字
    if (this.state.listType === 'search') {
      listParam.orderNo = this.state.orderNumber
    }
    //请求接口
    _order.getOrderList(listParam).then(res => {
      this.setState(res);
    }, (errMsg) => {
      this.setState({
        list: []
      });
      _mutil.errorTips(errMsg);
    })
  }

  //搜索
  onSearch(orderNumber) {
    let listType = orderNumber === '' ? 'list' : 'search';
    this.setState({
      listType: listType,
      pageNum: 1,
      orderNumber: orderNumber
    }, () => {
      this._loadOrderList();
    })
  }

  // 页数发生变化时，传入当前选中页面，调用this._loadOrderList()刷新列表
  onPageNumChange(pageNum) {
    this.setState({
      pageNum
    }, () => {
      this._loadOrderList();
    })
  }

  render() {
    let tableHeads = ['订单号','收件人', '订单状态','订单总价','创建时间','操作'];
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title='订单列表' />
          <ListSearch onSearch={(orderNumber) => this.onSearch(orderNumber)} />
          <TableList tableHeads={tableHeads}>
            {
              this.state.list.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/order/detail/${order.orderNo}`}>{order.orderNo}</Link>
                    </td>
                    <td>{order.receiverName}</td>
                    <td>{order.statusDesc}</td>
                    <td>￥{order.payment}</td>
                    <td>{order.createTime}</td>
                    <td>
                      <Link to={`/order/detail/${order.orderNo}`}>详情</Link>
                    </td>
                  </tr>
                )
              })
            }
          </TableList>
          <Pagination
            current={this.state.pageNum}
            total={this.state.total}
            onChange={(pageNum) => this.onPageNumChange(pageNum)} />
        </div>
      </div>
    )
  }
}


export default OrderList;