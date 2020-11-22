import React from 'react'
import Spinner from './Spinner'


const DisplayData = (props) => {
    const { cases, deaths, recovered, country, todayCases, casesPerOneMillion, imgSrc, error } = props;


    if (props.loading) {
        return <Spinner />
    } else if (cases) {
        return (
            <main className="bg-gray-50 h-full min-h-screen" >
                <header className="flex items-center h-12 border-b bg-blue-100 py-10 w-full p-10 pt-12">
                <img className="rounded-full h-8 w-8 items-center justify-center " src={imgSrc} alt="" />
                <h1 className="text-3xl text-gray-900 font-bold hover:text-gray-700 ml-4">Today in {country}</h1>
                </header>
                <section className="p-4 sm:p-10 py-20 min-w-full max-w-full">
                <ul className="sm:grid sm:grid-cols-2 sm:gap-4 ">
                <li className="bg-blue-100 font-mono text-xl p-10 py-20 rounded-lg">
                    <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">Cases per One Million:</p>
                    <p className="text-2xl text-gray-800 font-bold sm:text-5xl">{casesPerOneMillion}</p>
                </li>
                <li className="bg-blue-100 py-10 font-mono text-xl p-10 rounded-lg">
                <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">Total Deaths:</p>
                <p className="text-2xl text-gray-800 font-bold sm:text-5xl">{deaths}</p></li>
                <li className="bg-blue-100 py-20 font-mono text-xl p-10 rounded-lg">
                <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">
                Total Recovered:</p>
                <p className="text-2xl text-gray-800 font-bold sm:text-5xl">
                {recovered}
                </p></li>
                <li className="bg-blue-100 font-mono text-xl p-10 py-20 rounded-lg">
                <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">
                Cases Reported Today: </p>
                <p className="text-2xl text-gray-800 font-bold sm:text-5xl">
                {todayCases}</p>
                </li>
                </ul>
                </section>
            </main>
        )
    }
    else {
        return (
            <h2>{error}</h2>
        )
    }
}

export default DisplayData;