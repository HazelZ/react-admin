import React,{ Component } from 'react';
import PageTitle from 'component/_pageTitle/index';
import CategorySelector from 'page/product/index/category-selector';

import FileUploader from 'utils/fileUploader/index';
import RichEditor from 'utils/richEditor/index';
import MUtil from 'utils/mutil';
import Product from 'service/productService';
import './save.scss';

const _mutil = new MUtil();
const _product = new Product();


class ProductSave extends Component {
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
  // 加载商品详情
  _loadProduct(){
    // 有id的时候，表示是编辑功能，需要表单回填=======todo
    if(this.state.id){
      _product.getProduct(this.state.id).then( (res) => {
        console.log(res);
        let images = this.state.subImages.split(',');
        res.subImages = images.map((img) => {
          return {
            uri:img,
            url:img.imagehost
          }
        })
      }, (errMsg) => {
        _mutil.errorTips(errMsg)
      })
    }
  }

// 简单字段的改变：商品名称，描述，库存，价格
  onValueChange(e){
    let name = e.target.name,
        value = e.target.value.trim();
    this.setState({
      [name]:value
    })
  }

  // 品类选择变化
  onCategoryChange(categoryId,parentCategoryId){
    this.setState({
      categoryId: categoryId,
      parentCategoryId: parentCategoryId
    })
  }

  // 上传图片成功
  onUploadSuccess(res){
    console.log(res)
    let subImages = this.state.subImages;
    subImages.push(res);
    this.setState({
      subImages
    })
  }

  // 上传图片失败
  onUploadError(errMsg){
    _mutil.errorTips(errMsg);
  }

  //删除图片
  onImageDelete(e){
    let index = parseInt(e.target.getAttribute('index')),
        subImages = this.state.subImages;

    subImages.splice(index,1);
    this.setState({subImages});
  }
// 富文本编辑器变化
  onRichEditorDetailChange(value){
    console.log(value)
    this.setState({
      detail:value
    })
  }

//图片
  _getSubImagesString(){
    return this.state.subImages.map((image) => image.uri).join(',');
  } 

// 提交表单
  onSubmit(){
    let product = {
      name       : this.state.name,
      subtitle   : this.state.subtitle,
      categoryId : parseInt(this.state.categoryId),
      subImages  : this._getSubImagesString(),
      detail     : this.state.detail,
      price      : parseFloat(this.state.price),
      stock      : parseInt(this.state.stock),
      status     : this.state.status,
    },
    // 验证
    productCheckResult = _product.checkProduct(product);
    // 表单验证成功
    if(productCheckResult.status){
      _product.saveProduct(product).then((res) => {
        _mutil.successTips(res);
        this.props.history.push('/product/index'); //上传成功之后跳转页面
      }, err => {
        _mutil.errorTips(err);
      });
    }
    // 表单验证失败
    else{
      _mutil.errorTips(productCheckResult.msg);
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
                <input type="text" 
                       className="form-control" 
                       placeholder="商品名称"
                       name='name' 
                       onChange={(e) => this.onValueChange(e)}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品描述</label>
              <div className="col-md-5">
                <input type="text" 
                       className="form-control" 
                       placeholder="请输入商品描述" 
                       name='subtitle' 
                       onChange={(e) => this.onValueChange(e)}/>
              </div>
            </div>
            <CategorySelector 
            onCategoryChange={(categoryId,parentCategoryId) => this.onCategoryChange(categoryId,parentCategoryId)} />
            <div className="form-group">
              <label className="col-md-2 control-label">商品价格</label>
              <div className="col-md-3">
                <div className="input-group">
                  <input type="number" 
                         className="form-control" 
                         placeholder="请输入商品价格"
                         name='price' 
                         onChange={(e) => this.onValueChange(e)} />
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
                         placeholder="请输入商品库存"
                         name='stock' 
                         onChange={(e) => this.onValueChange(e)} />
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
                        <i className='fa fa-close fa-3x' 
                           index={index}
                           onClick={(e) => this.onImageDelete(e)}></i>
                      </div>)
                    ) 
                  : <div>请上传图片</div>
                }
              </div>
              <div className="col-md-10 col-md-offset-2 file-upload-con">
                <FileUploader 
                onSuccess={(res) => {this.onUploadSuccess(res)}}
                onError={(errMsg) => {this.onUploadError(errMsg)}} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品详情</label>
              <div className="col-md-10">
                <RichEditor 
                onValueChange={(value) => this.onRichEditorDetailChange(value)} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary"
                      onClick={() => this.onSubmit()}>提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}


export default ProductSave;


















