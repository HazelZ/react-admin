import MUtil from 'utils/index';
const _request = new MUtil();

class Statistic{
  // 首页数据统计
  getHomeCount(){
    return _request.request({
      url: '/manage/statistic/base_count.do'
    })
  }
 
}

export default Statistic;