import React,{ Component } from 'react';

import Simditor from 'simditor';
import 'simditor/styles/simditor.scss';

// 通用的富文本编辑器，依赖jquery
class RichEditor extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this._loadEditor();
  }

  _loadEditor(){
    let element = this.refs['textarea'];
    this.simditor = new Simditor({
      textarea: $(element),
      defaultValue: this.props.placeholder || '请输入内容'
    })
    this.bindEditorEvent();
  }

// 初始化富文本编辑器的事件
  bindEditorEvent(){
    this.simditor.on('valuechanged', e => {
      this.props.onValueChange(this.simditor.getValue());
    })
  }  

  render(){
    return(
      <div className='rich-editor'>
        <textarea ref='textarea'></textarea>
      </div>
    )
  }
}

export default RichEditor;