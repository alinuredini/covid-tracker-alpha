import React from 'react';
import DisplayData from './components/DisplayData';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      country: {},
      countryInfo: {}
    }
  }

  componentDidMount() {
    fetch("https://corona.lmao.ninja/v3/covid-19/countries/germany")
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
      <div>
        <DisplayData 
                    imgSrc={this.state.countryInfo.flag}
                    country={this.state.country.country}
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