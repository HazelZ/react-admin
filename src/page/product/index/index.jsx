import React,{ Component } from 'react';
import { Link } from "react-router-dom";
import PageTitle from 'component/_pageTitle/index';

import Pagination from 'utils/pagination/index';
import TableList from 'utils/tableList/index';

import ListSearch from './index-list-search';
import './index.scss';

import MUtil from 'utils/mutil';
import Product from 'service/productService';

const _mutil = new MUtil();
const _product = new Product();

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      pageNum:1,
      listType: 'list'
    }
  }

  componentDidMount(){
    this._loadProductList();
  }
  
  _loadProductList(){
    let listParam ={};
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;

    //如果是搜索的话，需要传入搜索类型和搜索关键字
    if(this.state.listType === 'search'){
      listParam.searchType = this.state.searchType;
      listParam.keyword = this.state.searchKeyword;
    }
    
    //请求接口
    _product.getProductList(listParam).then(res =>{
      this.setState(res);
    }, (errMsg) => {
      this.setState({
        list: []
      });
      _mutil.errorTips(errMsg);
    })
  }
  
//搜索
onSearch(searchType,searchKeyword){
  // console.log(searchType,searchKeyword)
  let listType = searchKeyword === '' ? 'list' : 'search';
  this.setState({
    listType       : listType,
    pageNum        : 1,
    searchType     : searchType,
    searchKeyword  : searchKeyword
  },() => {
    this._loadProductList();
  }) 
}

// 页数发生变化时，传入当前选中页面，调用this._loadProductList()刷新列表
  onPageNumChange(pageNum){
    this.setState({
      pageNum
    }, () => {
      this._loadProductList();
    })
  }

// 改变商品状态:上架 / 下架
  onSetProductStatus(e, productId, currentStatus){
    let newStatus = currentStatus == 1 ? 2 : 1,
        confirmTips = currentStatus == 1 
        ? '确定要下架该商品？' 
        : '确定要上架该商品？';
    if(window.confirm(confirmTips)){
      _product.setProductStatus({
        productId: productId,
        status: newStatus
      }).then( res => {
        _mutil.successTips(res);
        this._loadProductList();
      }, errMsg => {
        _mutil.errorTips(errMsg);
      })
    }
  }

  render(){
    let tableHeads = [
      {name:'商品ID',width:'10%'},
      {name:'商品信息',width:'50%'},
      {name:'价格',width:'10%'},
      {name:'状态',width:'15%'},
      {name:'操作',width:'15%'},
      ]
    return(
      <div id="page-wrapper">
        <div id="page-inner">
        <PageTitle title='商品列表'>
          <div className="page-header-right">
            <Link to='/product/save' className='btn btn-primary'>
              <i className="fa fa-plus"></i>
              <span>添加商品</span>
            </Link>
          </div>
        </PageTitle>
        <ListSearch onSearch={(searchType,searchKeyword) => {this.onSearch(searchType,searchKeyword)}}/>
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((product,index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>
                    <p>{product.name}</p>
                    <p>{product.subtitle}</p>
                  </td>
                  <td>￥{product.price}</td>
                  <td>
                    <p>{product.status == 1 ? '在售' : '已下架'}</p>
                    <button 
                      className='btn btn-warning btn-xs' 
                      onClick={(e) => {this.onSetProductStatus(e,product.id,product.status)}}>{product.status == 1 ? '下架' : '上架'}</button>
                  </td>
                  <td>
                    <Link className='oper' to={`/product/detail/${product.id}`}>详情</Link>
                    <Link className='oper' to={`/product/save/${product.id}`}>编辑</Link>
                  </td>
                </tr>
              )
            })
          }
        </TableList>  
        <Pagination 
            current={this.state.pageNum} 
            total={this.state.total} 
            onChange={(pageNum) => this.onPageNumChange(pageNum)} />
        </div>
      </div>
      )
  }
}


export default ProductList;