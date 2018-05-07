import React, { Component } from 'react';
import PageTitle from 'component/_pageTitle/index';
import TableList from 'utils/tableList/index';
import CategorySelector from 'page/product/index/category-selector';

import MUtil from 'utils/mutil';
import Order from 'service/orderService';
import './detail.scss';

const _mutil = new MUtil();
const _order = new Order();


class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: this.props.match.params.orderNumber,
      orderInfo: {}
    }
  }

  componentDidMount() {
    this._loadOrderDetail();
  }

  // 接口请求详情数据，并加载出商品详情
  _loadOrderDetail() {
    _order.getOrderDetail(this.state.orderNumber).then((res) => {
      this.setState({ 
        orderInfo: res
      });
      }, (errMsg) => {
        _mutil.errorTips(errMsg);
      });
    }

  render() {
    let receiverInfo = this.state.orderInfo.shippingVo || {},
        productList = this.state.orderInfo.orderItemVoList || [];
    let tableHeads = [
      { name: '商品图片', width: '10%' },
      { name: '商品信息', width: '45%' },
      { name: '单价', width: '15%' },
      { name: '数量', width: '15%' },
      { name: '合计', width: '15%' }
    ];
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title='订单详情' />
          <div className="form-horizontal">
            <div className="form-group">
              <label className="col-md-2 control-label">订单号</label>
              <div className="col-md-5">
                <p className="form-control-static">{this.state.orderInfo.orderNo}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">创建时间</label>
              <div className="col-md-5">
                <p className="form-control-static">{this.state.orderInfo.createTime}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">收件人</label>
              <div className="col-md-5">
                <p className="form-control-static">
                  {receiverInfo.receiverName}，
                  {receiverInfo.receiverProvince} 
                  {receiverInfo.receiverCity} 
                  {receiverInfo.receiverAddress} 
                  {receiverInfo.receiverMobile || receiverInfo.receiverPhone}
                </p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">订单状态</label>
              <div className="col-md-5">
                <p className="form-control-static">
                  {this.state.orderInfo.statusDesc}
                  {
                    this.state.orderInfo.status === 20
                    ? <button className='btn btn-default btn-sm btn-send-goods'>立即发货</button>
                    : null
                  }
                </p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">支付方式</label>
              <div className="col-md-5">
                <p className="form-control-static">{this.state.orderInfo.paymentTypeDesc}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">订单金额</label>
              <div className="col-md-5">
                <p className="form-control-static">
                ￥{this.state.orderInfo.payment}
                </p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品列表</label>
              <div className="col-md-10">
                <TableList tableHeads={tableHeads}>
                  {
                    productList.map((product, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img className='p-img' src={`${this.state.orderInfo.imageHost}${product.productImage}`} 
                                  alt={product.productName} />
                          </td>
                          <td>{product.productName}</td>
                          <td>￥{product.currentUnitPrice}</td>
                          <td>{product.quantity}</td>
                          <td>￥{product.totalPrice}</td>
                        </tr>
                      )
                    })
                  }
                </TableList>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderDetail;


















