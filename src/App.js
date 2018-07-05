import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Logo from './components/Logo/Logo';
import CardList from './components/CardList';
import users from './components/users.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            route: 'signin',
            isSignedIn: false, 
            users: users
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onRouteChange = (route) => {
        if (route === 'signout') this.setState({isSignedIn: false})
        else if (route === 'home') this.setState({isSignedIn: true})
        this.setState({route: route});
    }
  
    render() {
        const { isSignedIn, route, users } = this.state;
        return (
          <div className="App">
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            { route === 'home' 
                ? <div>
                    {/*<Logo />*/}
                    <CardList users={users}/>
                </div>
                : (
                    route === 'signin'
                    ? <SignIn onRouteChange={this.onRouteChange} />
                    : <SignUp onRouteChange={this.onRouteChange} />
                )     
            }
          </div>
        );
      }
    }

export default App;