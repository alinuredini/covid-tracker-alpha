import React from 'react';
import DisplayData from './components/DisplayData';

let elem = document.getElementById('lang-switch');


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      country: {},
      countryInfo: {}
    }
  }


  componentDidMount() {
    fetch("https://corona.lmao.ninja/v3/covid-19/countries/macedonia?yesterday=true")
    .then(response => response.json())
    .then(data => {
      this.setState({
        country: data,
        countryInfo: data.countryInfo
      })
    })
  }
  render() {
    return (
      <div className="h-full min-h-screen">
                <header className="flex items-center place-content-between h-12 border-b bg-blue-100 py-10 w-full sm:px-40 px-4 pt-12">
                <div className="inline-flex items-center"><img className="rounded-full h-8 w-8 items-center justify-center" src="https://cdn.countryflags.com/thumbs/macedonia/flag-round-250.png" alt="" />
                <h2
                    className="p-4 sm:ml-2 text-xl outline-none sm:text-4xl text-gray-900 font-bold hover:text-blue-900 focus:ring-0 focus:shadow-lg focus:text-4xl focus:outline-none transition-all duration-300"
                >{this.state.country.country}</h2></div>
                <div class="relative inline-block text-left">
                <div><button type="button"
    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
    Language
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
  <div className="py-1" role="menu" aria-orientation="vertical" aria-hidden="true" aria-labelledby="options-menu">
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">English</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Македонски</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Shqip</a>
  </div>
</div>
</div>
</div>
                </header>
        <DisplayData 
                    cases={this.state.country.cases}
                    deaths={this.state.country.deaths}
                    casesPerOneMillion={this.state.country.casesPerOneMillion}
                    recovered={this.state.country.recovered}
                    todayCases={this.state.country.todayCases}
                    altText={`${this.state.country.country} flag`} />
      </div>
    );
  }
}

export default App;