import React from 'react'
import Menu from './Menu'
import Router from '../packs/Router';

class App extends React.Component {
  render() {
    return (
      <div className = "container" >
        <h2>Menu</h2>
        <Router />
      </div>
    )
  }
}

export default App