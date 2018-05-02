import React,{ Component } from 'react';
import { Link } from "react-router-dom";
import PageTitle from 'component/_pageTitle/index';
import TableList from 'utils/tableList/index';
import './index.scss';
import MUtil from 'utils/mutil';
import Product from 'service/productService';

const _mutil = new MUtil();
const _product = new Product();

class CategoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      parentCategoryId: this.props.match.params.categoryId || 0
    }
  }

  componentDidMount(){
    this._loadCategoryList();
  }
  
  componentDidUpdate(prevProps,prevState){
    let oldPath = prevProps.location.pathname,
        newPath = this.props.location.pathname,
        newId   = this.props.match.params.categoryId || 0;
    if(oldPath !== newPath){
      this.setState({
        parentCategoryId: newId
      }, () => {
        this._loadCategoryList();
      })
    }
  }

  // 加载品类列表
  _loadCategoryList(){
    _product.getCategoryList(this.state.parentCategoryId).then(res =>{
      this.setState({list:res});
    }, (errMsg) => {
      this.setState({
        list: []
      });
      _mutil.errorTips(errMsg);
    })
  }

//更新品类名字
  onUpdateName(categoryId, categoryName){
    let newName = window.prompt('请输入新的品类名称',categoryName);
    if(newName){
      _product.updateCategoryName({
        categoryId:categoryId,
        categoryName:newName
      }).then(res => {
        _mutil.successTips(res);
        this._loadCategoryList();
      }, errMsg => {
        _mutil.errorTips(errMsg);
      })
    }
  }

  render(){
    let listBody = this.state.list.map((category,index) => {
      return (
        <tr key={index}>
          <td>{category.id}</td>
          <td>{category.name}</td>
          <td>
            <a className='opera'
                onClick={(e) => this.onUpdateName(category.id,category.name)}>修改名称</a>
            {
              category.parentId === 0 
              ? <Link to={`/product-category/index/${category.id}`} className='opera'>查看子品类</Link> 
              : null
            }
          </td>
        </tr>)
    })
    return(
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title='品类列表'>
            <div className="page-header-right">
              <Link to='/product-category/add' className='btn btn-primary'>
                <i className="fa fa-plus"></i>
                <span>添加品类</span>
              </Link>
            </div>
          </PageTitle>
          <div className="row">
            <div className="col-md-12">
              <p>父品类ID: {this.state.parentCategoryId}</p>
            </div>
          </div>
          <TableList tableHeads={['品类ID','品类名称','操作']}>
            {listBody}
          </TableList>
        </div>
      </div>
      )
  }
}

export default CategoryList;