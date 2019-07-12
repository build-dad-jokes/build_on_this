import React, { Component } from "react";
import { connect } from "react-redux";
import { addJoke } from "../../actions";
import { withRouter } from "react-router-dom";
import "./styles.css";

export class AddJoke extends Component {
  state = {
    joke: "",
    punchline: "",
    user_id: this.props.currentUser.subject
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.currentUser.subject);
    this.props.addJoke(this.state);
    this.props.history.push("/welcome");
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.onSubmit}>
            <h1>Add a Joke</h1>
            <div className="form-group">
              <label htmlFor="question">Joke:</label>
              <input type="text" name="Joke" value={this.state.question} onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label htmlFor="answer">Punchline:</label>
              <input
                type="text"
                name="Punchline"
                value={this.state.answer}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-lg">Add Joke</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.auth;
};

export default withRouter(
  connect(
    mapStateToProps,
    { addJoke }
  )(AddJoke)
);
