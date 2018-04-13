import React,{ Component } from 'react';
import PageTitle from 'component/_pageTitle/index';
import CategorySelector from 'page/product/index/category-selector';

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
          <div className="form-horizontal">
            <div className="form-group">
              <label className="col-md-2 control-label">商品名称</label>
              <div className="col-md-5">
                <input type="text" className="form-control" placeholder="商品名称" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品描述</label>
              <div className="col-md-5">
                <input type="text" className="form-control" placeholder="请输入商品描述" />
              </div>
            </div>
            <CategorySelector />
            <div className="form-group">
              <label className="col-md-2 control-label">商品价格</label>
              <div className="col-md-3">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="请输入商品价格" />
                  <span className="input-group-addon">元</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品库存</label>
              <div className="col-md-3">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="请输入商品库存" />
                  <span className="input-group-addon">件</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品图片</label>
              <div className="col-md-10">
                图片组件
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品详情</label>
              <div className="col-md-10">
                富文本组件
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary">提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}


export default ProductSave;


















