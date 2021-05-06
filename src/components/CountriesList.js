import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CountriesList() {
    const [countries, updateCountries] = useState([])


    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((result) => {
                updateCountries(result.data)
            }).catch((err) => {
                console.log('Opps , Something broke!')
            });
    }, [])


    if (!countries.length) {
        return <h1>Ballo!   We are still Loading.....</h1>
    }
    return (
        <div>
            <div><h2>All Countries</h2></div>
            { countries.map((country, i) => {
                return <Link className='links' to={`/country/${country.alpha3Code}`} key={i}>
                    <img style={{ height: '15px', marginRight: '10px' }} src={country.flag} />
                    {country.name} <br></br>
                </Link>
            })
            }
        </div>
    )
}
export default CountriesList