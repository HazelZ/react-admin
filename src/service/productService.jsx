import MUtil from 'utils/index';
const _request = new MUtil();

class Product{
  // 获取商品列表
  getProductList(pageNum){
    return _request.request({
      type: 'post',
      url: '/manage/product/list.do',
      data: {
        pageNum: pageNum
      }
    })
  }
}

export default Product;