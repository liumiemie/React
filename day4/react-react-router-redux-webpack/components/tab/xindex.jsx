import React from "react";
import Xwechat from "../container/xwechat.jsx";
import Xcontact from "../container/xcontact.jsx";
import Xfooter from "../xfooter.jsx";
import { Route } from 'react-router-dom'
class Xindex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div>
    		<Route path="/index/wechat" component={Xwechat}/>
    		<Route path="/index/contact" component={Xcontact}/>
	    	<Xfooter />
    	</div>
    )
  }
}
export default (Xindex);
