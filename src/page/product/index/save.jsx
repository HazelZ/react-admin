import React,{ Component } from 'react';
import PageTitle from 'component/_pageTitle/index';

import MUtil from 'utils/mutil';
import Product from 'service/productService';

const _mutil = new MUtil();
const _product = new Product();


class ProductSave extends Component {
  render(){
    return(
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title='添加商品' />
          wew
        </div>
      </div>
      )
  }
}


export default ProductSave;