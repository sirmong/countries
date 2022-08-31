/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react'
import PropTypes from 'prop-types'
import CountryItem from '../CountryItem'
import useApi from '../../hook/UseApi'

import './index.css'

function CountryList({ filters }) {

  const { countries } = useApi()

  const filterCoutries = countries.filter((country) => country.name.common.toLowerCase().includes(filters.toLowerCase()))


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


  return <div className="coutrylist">{allContries}</div>
}

CountryList.propTypes = {
  filters: PropTypes.string.isRequired,
}

export default CountryList
