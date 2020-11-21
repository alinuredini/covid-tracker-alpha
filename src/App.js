import React from 'react';
import SearchCountry from './components/SearchCountry'

class App extends React.Component {
  render() {
    return (
      <div className="">
      <div className="container">
        <h1 className='title'>Covid 19 Tracker App</h1>
        <SearchCountry />
      </div>
      </div>
    );
  }
}

export default App;