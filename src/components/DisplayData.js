import React from 'react'
import Spinner from './Spinner'


const DisplayData = (props) => {
    const { cases, deaths, recovered, country, todayCases, casesPerOneMillion, imgSrc, error } = props;


    if (props.loading) {
        return <Spinner />
    } else if (cases) {
        return (
            <main className="bg-gray-50 h-full min-h-screen" >
                <header className="flex items-center h-12 border-b bg-blue-100 py-10 w-full sm:pl-40 pl-4 pt-12">
                <img className="rounded-full h-8 w-8 items-center justify-center" src={imgSrc} alt="" />
                <h1 className="text-xl text-gray-900 font-bold hover:text-gray-700 ml-4 sm:text-4xl">{country}</h1>
                </header>
                <section className="p-4 sm:p-8 mt-2 sm:px-40">
                    <div className="text-center p-4 sm:p-10 py-10 sm:px-40 bg-red-200 sm:mx-auto sm:w-1/2 rounded-lg"><p className="text-left pl-5 font-mono text-gray-800 font-bold text-2xl sm:text-4xl sm:text-center sm:pl-0">Stay Home!</p>
                    <p className="text-left pl-5 font-mono text-gray-600 text-sm pt-2 sm:text-center sm:pl-0">If you must go outside, wear a mask and distance properly.</p></div>
                </section>
                <section className="p-4 sm:pt-2 sm:pb-8 sm:px-40 mb-2">
                <ul className="sm:grid sm:grid-cols-2 sm:gap-4 flex flex-col gap-4">
                <li className="bg-blue-100 font-mono text-xl p-10 py-20 rounded-lg">
                    <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">Cases Reported Today:</p>
                    <p className="text-2xl text-gray-800 font-bold sm:text-5xl">{todayCases}</p>
                </li>
                <li className="bg-yellow-400 font-mono text-xl p-10 py-20 rounded-lg">
                <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">Total Deaths:</p>
                <p className="text-2xl text-gray-800 font-bold sm:text-5xl">{deaths}</p></li>
                <li className="bg-green-200 py-20 font-mono text-xl p-10 rounded-lg">
                <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">
                Total Recovered:</p>
                <p className="text-2xl text-gray-800 font-bold sm:text-5xl">
                {recovered}
                </p></li>
                <li className="bg-yellow-400 font-mono text-xl p-10 py-20 rounded-lg">
                <p className="text-gray-600 text-base sm:text-2xl sm:pb-4">
                Cases per One Million: </p>
                <p className="text-2xl text-gray-800 font-bold sm:text-5xl">
                {casesPerOneMillion}</p>
                </li>
                </ul>
                </section>
                <footer className="block relative left-0 bottom-0 w-full mb-8 text-center">
                    <p className="text-gray-400 font-mono text-xs">Data sourced from <a className="link text-blue-500 hover:text-blue-700 transition-all" href="https://corona.lmao.ninja/">disease.sh</a>. Built using <a className="link text-blue-500 hover:text-blue-700 transition-all" href="https://reactjs.org/">React</a> + <a className="link text-blue-500 hover:text-blue-700 transition-all" href="http://tailwindcss.com/">Tailwind CSS</a>. Find it on <a className="link text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/alinuredini/covid-tracker-alpha">Github.</a></p>
                </footer>
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