import React,{ Component } from 'react';

// 通用分页组件
class TableList extends Component{
  constructor(props){
    super(props)
  }

  render(){
  let listError = (
    <tr>
      <td colSpan="5" className='text-center'>
        {this.state.firstLoading ? '正在加载数据~' : '没有找到相应的结果~'}
      </td>
    </tr>
    );

  let tableBody = this.state.list.length > 0 ? listBody : listError;


    return(
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>商品名称</th>
                <th>商品描述</th>
                <th>商品ID</th>
                <th>商品类别</th>
                <th>商品图片</th>
                <th>商品价格</th>
              </tr>
            </thead>
            <tbody>
              { tableBody }             
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableList;