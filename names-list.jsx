import React from 'react'
import model from './model.js'

class NameList extends React.Component {
  constructor(){
    super();
    this.state = {
      names: {}
    }
  }
  componentWillMount(){
    this.update()
  }
  render(){
    const names = Object.keys(this.state.names).map(idx=>{
      return (
        <li key={idx}>
          {this.state.names[idx].name}
        </li>
      )
    });
    return (
      <ul>
        {names}
      </ul>
    )
  }
  update(){
    model.getValue(['names', 'length'])
      .then(function(length ){
        console.log(arguments, '1')
        return model.get(['names', { from:0, to: length-1}, 'name'])
      }.bind(this))
      .then(function(response){
        console.log(arguments, '2')
        this.setState({names: response.json.names})
      }.bind(this))
  }
}
export default NameList;