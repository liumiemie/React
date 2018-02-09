import React from 'react';
import {connect} from 'react-redux';
class Xdialog extends React.Component {
  render() {
    return (<div>
      <div style={{display: this.props.showDialog?"block":"none"}}>
	    <div className="weui-mask"></div>
	    <div className="weui-dialog">
	        <div className="weui-dialog__hd"><strong className="weui-dialog__title">弹窗标题</strong></div>
	        <div className="weui-dialog__bd">弹窗内容，告知当前页面信息等</div>
	        <div className="weui-dialog__ft">
	            <a href="javascript:;" className="weui-dialog__btn weui-dialog__btn_primary">确定</a>
	        </div>
	    </div>
	</div>
    </div>)
  }
}
export default Xdialog;