import React, { Component } from "react";
import { fetchSavedJokes } from "../../actions";
import { connect } from "react-redux";
import Joke from "./Joke";

import "./styles.css";

export class SavedJokes extends Component {
  componentDidMount() {
    this.props.fetchSavedJokes();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Saved Jokes</h1>
        <ul>
          {this.props.savedJokes.map(joke => {
            return (
              <Joke
                question={joke.joke}
                id={joke.id}
                answer={joke.punchline}
                key={joke.id}
                created_by={joke.created_by}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state.auth;
}
export default connect(
  mapStateToProps,
  { fetchSavedJokes }
)(SavedJokes);
