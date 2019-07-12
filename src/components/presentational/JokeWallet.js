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
    return (
      <div>
        <h1>Saved Jokes</h1>
        <ul>
          {this.props.jokes.map(joke => {
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

const mapStateToProps = state => {
  console.log(state);
  return {
    savedJokes: state.jokes.joke,
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { fetchSavedJokes }
)(SavedJokes);
