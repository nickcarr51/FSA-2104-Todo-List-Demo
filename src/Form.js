import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from './redux/actions'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({ text: ev.target.value });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const { text } = this.state;
    this.props.addTodo(text);
    this.setState({ text: "" });
  }

  render() {
    const { text } = this.state;
    const { pathname } = this.props.location;
    return (
      pathname !== '/complete' && 
      <form onSubmit={this.handleSubmit}>
        <input
          value={text}
          onChange={(ev) => this.handleChange(ev)}
          placeholder="Add New Item..."
        />
        <button type="submit">Add New Todo</button>
      </form>
    );
  }
}

const mapDispatchToProps = { addTodo }

export default connect(null, mapDispatchToProps)(Form);
