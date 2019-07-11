import React, { Component } from 'react';
import Jokes from './Jokes';
import { fetchPublicJokes } from '../../actions';
import { connect } from 'react-redux';

export class Home extends Component {

    componentDidMount(){
        this.props.fetchPublicJokes();
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
    return {
        jokes: state.jokes.jokes,
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps, { fetchPublicJokes })(Home);

