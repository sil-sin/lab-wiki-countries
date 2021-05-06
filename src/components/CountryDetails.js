import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CountryDetails(props) {

    const [countryDetail, updateCountry] = useState(null)

    const getData = () => {
        let countryId = props.match.params.id
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
            .then((result) => {

                const { name, capital, area, borders } = result.data

                let details = {
                    name: name,
                    capital: capital,
                    area: area,
                    borders: borders,
                    id: props.match.params.id
                }

                updateCountry(details)
            }).catch((err) => {
                console.log('error')
            });
    }


    useEffect(() => {

        getData()

    }, [])



    useEffect(() => {
        let countryId = countryDetail?.id
        let propsId = props.match?.params?.id

        if (countryId !== propsId) {
            getData()
        }
    })

    if (!countryDetail) {

        return <h1>Ballo!   We are still Loading.....</h1>
    }

    return (

        < div >

            <h1>{countryDetail.name}</h1>

            <h4> Capital:</h4><p> {countryDetail.capital}</p>
            <h4> Area:</h4> <p>{countryDetail.area}km2</p>
            <h4>Borders:</h4> <p>{countryDetail.borders.map((border, i) => {
                return <ul style={{ listStyle: 'none' }} key={i}>
                    <li><Link to={`/country/${border}`}>{border}</Link></li>
                </ul>
            })}
            </p>
        </div >
    )
}
export default CountryDetails