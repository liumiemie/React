import ReactDOM from 'react-dom';
import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import "weui";

//选项卡组件
import Xindex from "./components/tab/xindex.jsx";
import Xdetail from "./components/tab/xdetail.jsx";

ReactDOM.render(
	<Router>
		<div>
			<Route path="/index" component={Xindex}></Route>
			<Route path="/detail" component={Xdetail}></Route>
		</div>
	</Router>
	,
	document.querySelector("#app"))
