import React, {Component} from 'react'
import ReactDom from 'react-dom'
import NamesList from './names-list.jsx'

class NameManager extends Component {
  render(){
    return (
      <div>
        <NamesList/>
      </div>
    );
  }
}

ReactDom.render(<NameManager/>, document.getElementById('demo'));
