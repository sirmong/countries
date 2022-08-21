import React, {useId} from 'react'
import PropTypes, { number } from 'prop-types'
import CountryItem from './CountryItem'
import useApi from './UseApi'

import './CountryList.css'

function CountryList({ filters }) {

  const { countries } = useApi()
  const id = useId();
  // eslint-disable-next-line react/prop-types
  const filterCoutries = countries.filter((country) => country.name.common.toLowerCase().includes(filters.toLowerCase()))
  console.log(filterCoutries)

  const allContries = filters
    ? filterCoutries.map((key, index) => {
        const languages = Object.keys(key.languages).map((item, index) => <div key={index}>{key.languages[item]}</div>)
        return (
          <CountryItem
            flags={key.flags.svg}
            country={key.name.common}
            capital={key.capital}
            population={key.population}
            region={key.region}
            languages={languages}
            maps={key.maps.googleMaps}
            key={index}
          />
        )
      })
    : null

  console.log(allContries)

  return <div className="coutrylist">{allContries}</div>
}

CountryList.propTypes = {
    filters: PropTypes.string.isRequired,
}

export default CountryList
