import React,{ Component } from 'react';
import PageTitle from 'component/_pageTitle/index';
import MUtil from 'utils/mutil';
import Product from 'service/productService';

const _mutil = new MUtil();
const _product = new Product();

class CategoryAdd extends Component {
	constructor(props){
			super(props);
			this.state = {
					categoryList: [],
					parentId: 0,
					categoryName: ''
			}
	}

	componentDidMount(){
			this._loadCategoryList();
	}

	// 加载品类列表,显示父品类列表
	_loadCategoryList(){
			_product.getCategoryList().then(res =>{
					this.setState({categoryList:res});
			}, (errMsg) => {
					_mutil.errorTips(errMsg);
			})
	}

	// 简单字段的改变：商品名称，描述，库存，价格
	onValueChange(e) {
		let name = e.target.name,
				value = e.target.value.trim();
		this.setState({
			[name]: value
		})
	}

	onSubmit(){
		let categoryName = this.state.categoryName.trim();
		// 品类名不为空，直接提交数据
		if (categoryName){
			_product.saveCategory({
				parentId: this.state.parentId,
				categoryName: categoryName
			}).then((res) => {
				_mutil.successTips(res);
				this.props.history.push('/product-category/index');
			}, (errMsg) => {
				_mutil.errorTips(errMsg);
			})
		}
		// 否则提示错误
		else{
			_mutil.errorTips('请输入品类名称');
		}
	}

	render(){
			return(
					<div id="page-wrapper">
							<div id="page-inner">
									<PageTitle title='添加品类' />
									<div className="row">
											<div className="col-md-12">
													<div className="form-horizontal">
															<div className="form-group">
																	<label className="col-md-2 control-label">所属品类</label>
																	<div className="col-md-5">
																			<select name="parentId" 
																					className='form-control'
																					onChange={(e) => this.onValueChange(e)}>
																					<option value="0">根品类/</option>
																					{
																							this.state.categoryList.map((category,index) => {
																									return <option value={category.id} key={index}>根品类/{category.name}</option>
																							})
																					}
																			</select>
																	</div>
															</div>
														<div className="form-group">
															<label className="col-md-2 control-label">品类名称</label>
															<div className="col-md-5">
																<div className="input-group">
																	<input type="text"
																					className="form-control"
																					placeholder="请输入品类名称"
																					name='categoryName'
																					value={this.state.price}
																					onChange={(e) => this.onValueChange(e)} />

																</div>
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
							</div>
					</div>
			)
	}
}

export default CategoryAdd;