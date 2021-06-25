import React, { Component } from "react";

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
    this.props.submit(text);
    this.setState({ text: "" });
  }

  render() {
    const { text } = this.state;
    return (
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

export default Form;
