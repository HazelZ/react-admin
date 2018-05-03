import MUtil from 'utils/mutil';
const _mutil = new MUtil();

// service封装,可以做多种请求
class Order {
  // 获取商品列表
  getOrderList(listParam) {
    let url = '',
        data = {};

    if (listParam.listType === 'list') {
      url = '/manage/order/list.do';
      data.pageNum = listParam.pageNum;
    }
    else if (listParam.listType === 'search') {
      url = '/manage/order/search.do';
      data.pageNum = listParam.pageNum;
      data.orderNo = listParam.orderNo;
    }

    return _mutil.request({
      type: 'post',
      url: url,
      data: data
    })
  }
}

export default Order;










