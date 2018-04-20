import React,{ Component } from 'react';
import './category-selector.scss';

import MUtil from 'utils/mutil';
import Product from 'service/productService';

const _mutil = new MUtil();
const _product = new Product();

// 品类选择器组件
class CategorySelector extends Component {
	constructor(props){
		super(props);
		this.state = {
			firstCategoryList  : [],
			firstCategoryId    : 0,
			secondCategoryList : [],
			secondCategoryId   : 0
		}
	}
	
	componentDidMount(){
		this._loadFirstCategory();
	}

  // props变化时触发
  componentWillReceiveProps(nextProps){
    let categoryIdChange        = this.props.categoryId !== nextProps.categoryId,
        parentCategoryIdChange  = this.props.parentCategoryId !== nextProps.parentCategoryId;
    // 数据没有发生变化，直接return，不做处理
    if(!categoryIdChange && !parentCategoryIdChange){
        return;
    }
    // 判断假如只有一级品类
    if(nextProps.parentCategoryId === 0){
      this.setState({
        firstCategoryId: nextProps.categoryId,
        secondCategoryId:0
      });
    }
    //有两级品类时
    else{
      this.setState({
        firstCategoryId  : nextProps.parentCategoryId,
        secondCategoryId : nextProps.categoryId
      }, () => {
        parentCategoryIdChange && this._loadSecondCategory();
        console.log('load2')
      });
    }
  }

	//加载一级分类
	_loadFirstCategory(){
		_product.getCategoryList().then( res => {
      // console.log(res)
			this.setState({
				firstCategoryList: res
			});
		}, errMsg => {
        _mutil.errorTips(errMsg);
    });
	}

//加载二级分类
  _loadSecondCategory(){
    _product.getCategoryList(this.state.secondCategoryId).then( res => {
      this.setState({
        secondCategoryList: res
      });
    }, errMsg => {
      _mutil.errorTips(errMsg);
    })
  }

	//一级品类变化时二级列表相应生成
	onFirstCategoryChange(e){
    let newValue = e.target.value || 0;
    // console.log(newValue)
    this.setState({
      firstCategoryId: newValue,
      secondCategoryId: 0,
      secondCategoryList:[]
    }, () => {
      // 前面清空一下，再异步更新二级品类
      this._loadSecondCategory();
      this.onPropsCategoryChange();
    })
	}
// 选择二级品类时
  onSecondCategoryChange(e){
    let newValue = e.target.value || 0;
    // console.log(newValue)
    this.setState({
      secondCategoryId: newValue,
    }, () => {
      this.onPropsCategoryChange();
    })
  }

  // 传给父组件选中的结果
  onPropsCategoryChange(){
    // 判断props里的回调函数存在
    let categoryChangable = typeof this.props.onCategoryChange === 'function';
    // 如果有二级品类
    if(this.state.secondCategoryId){
      categoryChangable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId)
    }
    // 如果只有一级品类
    else{
      categoryChangable && this.props.onCategoryChange(this.state.firstCategoryId, 0);
    }
  }

  render(){
    return(
    	<div className="form-group">
        <label className="col-md-2 control-label">所属分类</label>
        <div className="col-md-10">
          <select
            value={this.state.firstCategoryId} 
          	className='form-control cate-select'
          	onChange={(e) => this.onFirstCategoryChange(e)}>
            <option value="请选择一级分类">请选择一级分类</option>
            {
            	this.state.firstCategoryList.map((category,index) => {
            		return <option value={category.id} key ={index}>{category.name}</option>
            	})
            }
          </select>
          {
            this.state.secondCategoryList.length > 0 ?
              <select className='form-control cate-select'
                value={this.state.secondCategoryId}
                onChange={(e) => this.onSecondCategoryChange(e)}>
              <option value="请选择二级分类">请选择二级分类</option>
              {
                this.state.secondCategoryList.map((category,index) => {
                  return <option value={category.id} key ={index}>{category.name}</option>
                })
              }
            </select> : null
          }
          
        </div>
      </div>
    	)
  }
}


export default CategorySelector;    	