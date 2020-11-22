import React, { useState } from 'react';
import DisplayData from './DisplayData'

const GetData = () => {
    const [details, setDetails] = useState({});
    const [countInfo, setCountryInfo] = useState({})

    const search = () => {
        let url = 'https://corona.lmao.ninja/v3/covid-19/countries/germany';
        
    const res = fetch(url);
    const data = res.json();
    if (res.ok) {
        setDetails(data)
    } else {
        setError(true)
    }

    const info = data.countryInfo
    setCountryInfo(info);

        }

        return (
            
                   <DisplayData
                        imgSrc={countInfo.flag}
                        country={details.country}
                        cases={details.cases}
                        deaths={details.deaths}
                        casesPerOneMillion={details.casesPerOneMillion}
                        recovered={details.recovered}
                        todayCases={details.todayCases}
                        altText={`${details.country} flag`}
                    />
                
    
    
            
        )

        } 
        window.onload = GetData(search);
            export default GetData;
        