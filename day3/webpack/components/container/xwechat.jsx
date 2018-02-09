import React from "react";
import Xheader from "../xheader.jsx";
import Xsearch from "../xsearch.jsx";
import Xpanel from "../xpanel.jsx";
class Xwechat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
	    <div>
	    	<Xheader />
	    	<Xsearch />
	    	<Xpanel />
	    </div>
    )
  }
}
export default Xwechat;
