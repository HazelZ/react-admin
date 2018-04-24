import React,{ Component } from 'react';
import PageTitle from 'component/_pageTitle/index';
import CategorySelector from 'page/product/index/category-selector';

import MUtil from 'utils/mutil';
import Product from 'service/productService';
import './save.scss';

const _mutil = new MUtil();
const _product = new Product();


class ProductDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.pid,
      name:'',
      subtitle:'',
      price:'',
      stock:'',
      detail:'',
      categoryId: 0,
      parentCategoryId: 0,
      subImages: [],
      status:1   //商品状态1 为在售
    }
  }

  componentDidMount(){
    this._loadProduct();
  }

  // 接口请求详情数据，并加载出商品详情
  _loadProduct(){
    // 有id的时候，表示是编辑功能，需要表单回填
    if(this.state.id){
      _product.getProduct(this.state.id).then((res) => {
        let images = res.subImages.split(',');
        res.subImages = images.map((imgUri) => {
          return {
            uri: imgUri,
            url: res.imageHost + imgUri
          }
        });
        this.setState(res);
      }, (errMsg) => {
        _mutil.errorTips(errMsg);
      });
    }
  }

  render(){
    return(
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title='添加商品' />
          <div className="form-horizontal">
            <div className="form-group">
              <label className="col-md-2 control-label">商品名称</label>
              <div className="col-md-5">
                <p className="form-control-static">{this.state.name}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品描述</label>
              <div className="col-md-5">
                <p className="form-control-static">{this.state.subtitle}</p>
              </div>
            </div>
            <CategorySelector
              readOnly 
              categoryId={this.state.categoryId}
              parentCategoryId={this.state.parentCategoryId} />
            <div className="form-group">
              <label className="col-md-2 control-label">商品价格</label>
              <div className="col-md-3">
                <div className="input-group">
                  <input type="number" 
                         className="form-control" 
                         value={this.state.price} readOnly/>
                  <span className="input-group-addon">元</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品库存</label>
              <div className="col-md-3">
                <div className="input-group">
                  <input type="number" 
                         className="form-control" 
                         value={this.state.stock} readOnly />
                  <span className="input-group-addon">件</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品图片</label>
              <div className="col-md-10">
                {
                  this.state.subImages.length
                  ? this.state.subImages.map(
                    (img, index) => (
                      <div className='img-wrap' key={index}>
                        <img className='img' src={img.url} />
                      </div>)
                    ) 
                  : <div>暂无图片</div>
                }
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品详情</label>
              <div className="col-md-10" dangerouslySetInnerHTML={{__html:this.state.detail}}>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default ProductDetail;


















