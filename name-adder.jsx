import React ,{Component, PropTypes} from 'react'
import model from './model.js'

class NameAdder extends Component{
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          ref="input"
          />
        <button>add name</button>
      </form>
    );
  }
  handleSubmit(e){
    e.preventDefault();

    const input = this.refs.input;

    model.
      call(['names', 'add'], [input.value], ['name']).
      then(()=>{
        input.value = null;
        input.focus();
        this.props.onAdded();
      })
  }
}

NameAdder.propTypes = {
  onAdded: PropTypes.func.isRequired
};

export default NameAdder;