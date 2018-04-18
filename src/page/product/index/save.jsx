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
      categoryId: 0,
      parentCategoryId: 0,
      subImages: []
    }
  }
  // 品类选择变化
  onCategoryChange(categoryId,parentCategoryId){
    console.log(categoryId,parentCategoryId)
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
        console.log(index);
        console.log(subImages);
    subImages.splice(index,1);
    this.setState({subImages});
    console.log(subImages);
  }
// 富文本编辑器变化
  onRichEditorDetailChange(value){
    console.log(value)
    this.setState({
      detail:value
    })
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
                <input type="text" className="form-control" placeholder="商品名称" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-2 control-label">商品描述</label>
              <div className="col-md-5">
                <input type="text" className="form-control" placeholder="请输入商品描述" />
              </div>
            </div>
            <CategorySelector 
            onCategoryChange={(categoryId,parentCategoryId) => this.onCategoryChange(categoryId,parentCategoryId)} />
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


















