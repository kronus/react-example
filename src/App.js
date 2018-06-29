import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Songs from './Songs/Songs';
import SongsPagination from "./Songs-Pagination/SongsPagination";

class App extends Component {

    appButtonHandler = () => {
        console.log('clicked button')
    }

    render() {
        /*return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Seeing if this works</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );*/
        return  React.createElement('div', {className: 'App'}, null,
                    React.createElement('header', {className: 'App-header'},
                        React.createElement('img', {src: logo, className: 'App-logo', alt: 'logo'}, null),
                        React.createElement('h1', {className: 'App-title'}, 'Seeing if this works'), null),
                    React.createElement(SongsPagination, {className: 'App-intro'}, null),
                    React.createElement('button', {onClick: this.appButtonHandler, className: 'btn-primary'}, 'Click me')
                );
    }
}

export default App;
