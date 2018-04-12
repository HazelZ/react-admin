import React,{ Component } from 'react';
import { Link } from "react-router-dom";

import Pagination from 'utils/pagination/index';
import TableList from 'utils/tableList/index';
import PageTitle from 'component/_pageTitle/index';

import MUtil from 'utils/index';
import Product from 'service/productService';

const _request = new MUtil();
const _product = new Product();

class ProductList extends Component {
  constructor(props){
  super(props);
  this.state = {
    list: [],
    pageNum:1,
    firstLoading:true
  }
}

  componentDidMount(){
    this._loadProductList();
  }
  
  _loadProductList(){
    _product.getProductList(this.state.pageNum).then(res =>{
      console.log(res)
      this.setState(res,() => {
        this.setState({
          firstLoading:false
        })
      });
    }, (errMsg) => {
      this.setState({
        list: []
      });
      _request.errorTips(errMsg);
    })
  }

// 页数发生变化时，传入当前选中页面，调用this._loadProductList()刷新列表
  onPageNumChange(pageNum){
    this.setState({
      pageNum
    },() => {
      this._loadProductList()
    })
  }

  render(){
    let listBody = this.state.list.map((product,index) => {
      return (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.subtitle}</td>
          <td>{product.id}</td>
          <td>{product.categoryId}</td>
          <td><img src={product.imageHost + product.mainImage} /></td>
          <td>{product.price}</td>
        </tr>
      )
    });


    return(
        <div id="page-wrapper">
        <div id="page-inner">
        <PageTitle title='商品列表'></PageTitle>
        <TableList>

        </TableList/>  
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