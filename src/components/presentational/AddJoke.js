import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJoke } from '../../actions';
import { withRouter } from 'react-router-dom';


export class AddJoke extends Component {
    state = {
      question: '',
      answer: '',
      user_id: this.props.currentUser.subject
    };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.currentUser.subject);
    this.props.addJoke(this.state);
    this.props.history.push('/welcome');

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.onSubmit}>
            <h1>Add a Joke</h1>
            <div className="form-group">
              <label htmlFor="question">Question:</label>
              <input
                type="text"
                name="question"
                value={this.state.question}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="answer">Answer:</label>
              <input
                type="text"
                name="answer"
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


const mapStateToProps = (state) => {
  return state.auth
}

export default withRouter(connect(mapStateToProps, { addJoke })(AddJoke));