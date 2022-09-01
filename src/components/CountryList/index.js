/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'
import CountryItem from '../CountryItem'
import useApi from '../../hook/UseApi'

import './index.css'

function CountryList({ filters }) {

  const { countries } = useApi()

  const filterCoutries = countries.filter((country) => country.name.common.toLowerCase().includes(filters.toLowerCase()))

  // const languages = Object.values(countries.languages).map((item, index) => <div >{item.languages}</div>)
  const allContries = filters
    ? filterCoutries.map((key, index) =>

    (
      <CountryItem
        flags={key.flags.svg}
        country={key.name.common}
        capital={key.capital}
        population={key.population}
        region={key.region}
        languages={Object.values(key.languages).map((item, index) => <div >{item}</div>)}
        maps={key.maps.googleMaps}
        key={index}
      />
    )
    )
    : ''


  return <div className="coutrylist">{allContries}</div>
}

CountryList.propTypes = {
  filters: PropTypes.string.isRequired,
}

export default CountryList
