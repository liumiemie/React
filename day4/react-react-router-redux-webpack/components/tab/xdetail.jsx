import React from "react";
import Xgallery from "../xgallery.jsx";
import Xdialog from "../xdialog.jsx";
import {connect} from "react-redux";
class Xdetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
    	img: require("../../images/test.jpg"),
    	img2: require("../../images/logo.png"),
    	bool: false,
    	showDialog: false
    }
  }
  render() {
    return (
    	<div>
    		联系
    		<button onClick={()=>{
    			this.setState({
    				showDialog: true
    			})
    		}}>dialog</button>
    		<div>
    			<img onClick={this.props.showGallery.bind(this)} src={this.state.img} />
    			<img style={{width:"100%"}} onClick={this.props.showGallery.bind(this)} src={this.state.img2} />
    		</div>
    		<Xgallery />
    		<Xdialog showDialog={this.state.showDialog} />
    	</div>
    )
  }
}
//export default Xdetail;
export default connect((state)=>{
	return state
},(dispatch,props)=>{
	return {
		showGallery(e){
			console.log(e.target.src)
			console.log(this)
			this.setState({
				bool: true
			})
			dispatch({
				type:"changeSrc",
				src: e.target.src,
				isShowGallery: true
			})
		}
	}
})(Xdetail);
