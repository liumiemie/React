import React from 'react';
import {connect} from 'react-redux';
class Xgallery extends React.Component {
	constructor(props){
		super(props)
	}
  render() {
    return (<div>
      <div className="weui-gallery" style={{display:this.props.isShowGallery?"block":"none"}}>
	    <span className="weui-gallery__img" style={{backgroundImage: "url("+this.props.src+")"}}></span>
	    <div className="weui-gallery__opr">
	        <a onClick={this.props.cancelGallery} href="javascript:" className="weui-gallery__del">
	            <i className="weui-icon-delete weui-icon_gallery-delete"></i>
	        </a>
	    </div>
	</div>
    </div>)
  }
}

export default connect((state)=>{
	console.log(state)
	return state
},(dispatch)=>{
	return {
		cancelGallery(){
			dispatch({
				type:"changeSrc",
				bool:false,
				src:""
			})	
		}
	}
})(Xgallery);
