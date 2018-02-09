import React from 'react';
export default class Xsearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false,
      search: ""
    }
    this.toggle = this.toggle.bind(this)
    this.cancel = this.cancel.bind(this)
    this.getIunputValue = this.getIunputValue.bind(this)
    this.searchClear = this.searchClear.bind(this)
  }
  render() {
    return (<div>
      <div className={this.state.bool
          ? 'weui-search-bar weui-search-bar_focusing'
          : 'weui-search-bar'} id="searchBar">
        <form className="weui-search-bar__form">
          <div className="weui-search-bar__box">
            <i className="weui-icon-search"></i>
            <input ref="input" onChange={this.getIunputValue} value={this.state.search} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required=""/>
            <a href="javascript:" onClick={this.searchClear} className="weui-icon-clear" id="searchClear"></a>
          </div>
          <label onClick={this.toggle} className="weui-search-bar__label" id="searchText">
            <i className="weui-icon-search"></i>
            <span>搜索</span>
          </label>
        </form>
        <a href="javascript:" onClick={this.cancel} className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
      </div>
    </div>)
  }
  toggle() {
    console.log(1)
    // this.bool = !this.bool
    console.log(this.state)
    this.setState({bool: true})
    this.refs.input.focus()
    console.log(this.refs.input)
  }
  cancel() {
    this.setState({bool: false})
  }
  getIunputValue(event) {
    this.setState({search: event.target.value})
  }
  searchClear() {
    this.setState({search: ""})
    this.refs.input.focus()
  }
}
