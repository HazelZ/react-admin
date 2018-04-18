import React,{ Component } from 'react';

import FileUpload from './FileUpload';

class FileUploader extends Component{
  render(){
  /*set properties*/
    const options={
      baseUrl:'/manage/product/upload.do',
      fileFieldName:'upload_file',
      dataType: 'json',
      chooseAndUpload: true,
      uploadSuccess: (res) => {
        this.props.onSuccess(res.data);
      },
      uploadError: (err) =>{
        this.props.err.message || '上传图片出错啦！~';
      }
    }
    /*Use FileUpload with options*/
    /*Set two dom with ref*/
    return (
      <FileUpload options={options}>
        <button className='btn btn-xs btn-default' ref="chooseAndUpload">请选择图片</button>
      </FileUpload>
    )         
  }
}

export default FileUploader;
