import React, { Component } from 'react';
import Jokes from './Jokes';
import { fetchAllJokes } from '../../actions';
import { connect } from 'react-redux';

export class Welcome extends Component {

    componentDidMount(){
        this.props.fetchAllJokes();
    }

    render() {
        return (
            <div>
               <Jokes jokes={this.props.jokes} />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        jokes: state.jokes.jokes,
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps, { fetchAllJokes })(Welcome);

