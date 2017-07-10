import React, { Component } from 'react';

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    console.log(this.props);
    const { handleSubmit, todos } = this.props
    return(
      <section>
        <form onSubmit= { (e) => {
          e.preventDefault()
          handleSubmit(this.state.text, todos.length)
        }}>
          <input value= {this.state.text}
                 placeholder= 'Add Stuff Here'
                 onChange={ (e) => this.setState({ text: e.target.value })} />
          <button>Submit Me</button>
        </form>
      </section>
    )
  }
}
