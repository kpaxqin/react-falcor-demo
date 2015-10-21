import React, {Component} from 'react'
import ReactDom from 'react-dom'
import NamesList from './names-list.jsx'
import NameAdder from './name-adder.jsx'

class NameManager extends Component {
  render(){
    return (
      <div>
        <NamesList ref="list"/>
        <NameAdder
          onAdded={this._onAdded.bind(this)}
          />
      </div>
    );
  }
  _onAdded(){
    const list = this.refs.list;
    list.update();
  }
}

ReactDom.render(<NameManager/>, document.getElementById('demo'));
