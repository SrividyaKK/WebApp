import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import CardList from './components/CardList/CardList';
// import Scroll from './components/Scroll';
import Title from './components/Title';
import users from './components/users.js';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 60, 
            density: {
                enable: true, 
                value_area: 800
            }
        }, 
        color: {
            value: '#FF00FF'
        }
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            route: 'signin',
            isSignedIn: false, 
            users: users, 
            isChecked: false
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    // onChecked = () => {

    // }

    onRouteChange = (route) => {
        if (route === 'signout') this.setState({isSignedIn: false})
        else if (route === 'home') this.setState({isSignedIn: true})
        this.setState({route: route});
    }
  
    render() {
        const { isSignedIn, route, users } = this.state;
        // const filteredUsers = users;

        return (
          <div className="App">
            <Particles className='particles'
                params={particlesOptions}
                style={{width: '100%'}}
            />
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            { route === 'home' 
                ? <div>
                    <Title />
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