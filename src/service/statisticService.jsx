import MUtil from 'utils/mutil';
const _mutil = new MUtil();

class Statistic{
  // 首页数据统计
  getHomeCount(){
    return _mutil.request({
      url: '/manage/statistic/base_count.do'
    })
  }
 
}

export default Statistic;