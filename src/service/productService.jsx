import MUtil from 'utils/mutil';
const _mutil = new MUtil();

// service封装,可以做多种请求
class Product {
  // 获取商品列表
  getProductList(listParam){
    let url  = '',
        data = {};

    if(listParam.listType === 'list'){
      url = '/manage/product/list.do';
      data.pageNum = listParam.pageNum;
    }
    else if(listParam.listType === 'search'){
      url = '/manage/product/search.do';
      data.pageNum = listParam.pageNum;
      data[listParam.searchType] = listParam.keyword;
    }

    return _mutil.request({
      type : 'post',
      url  : url,
      data : data
    })
  }

  // 变更商品销售状态
  getProductStatus(productInfo){
    return _mutil.request({
      type: 'post',
      url: '/manage/product/set_sale_status.do',
      data: productInfo
    })
  }


  
  // 品类相关
  getCategoryList(parentCategoryId){
    return _mutil.request({
      type: 'post',
      url : '/manage/category/get_category.do',
      data: {
        categoryId : parentCategoryId || 0
      }
    })
  }
}

export default Product;










