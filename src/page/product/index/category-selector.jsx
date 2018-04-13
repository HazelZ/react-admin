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

	//加载一级分类
	_loadFirstCategory(){
		_product.getCategoryList().then( res => {
			console.log(res.constructor == Array)
			console.log( typeof res)
			this.setState({
				firstCategoryList : res
			}, errMsg => {
				_mutil.errorTips(errMsg);
			})
		})
	}

	//
	onFirstCategoryChange(e){

	}

  render(){
    return(
    	<div className="form-group">
        <label className="col-md-2 control-label">所属分类</label>
        <div className="col-md-10">
          <select 
          	className='form-control cate-select'
          	onChange={(e) => this.onFirstCategoryChange(e)}>
            <option value="请选择一级分类"></option>
            {
            	this.state.firstCategoryList.map((category,index) => {
            		return <option value={category.id} key ={index}>{category.name}</option>
            	})
            }
          </select>
          <select name="" className='form-control cate-select'>
            <option value="请选择一级分类"></option>
          </select>
        </div>
      </div>
    	)
  }
}


export default CategorySelector;    	