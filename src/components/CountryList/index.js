/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */

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


      return (
        <CountryItem
          flags={key.flags.svg}
          country={key.name.common}
          capital={key.capital}
          population={key.population}
          region={key.region}
          languages={key.languages !== undefined ? Object.values(key.languages).map((item, index) => <div key={index}>{item}</div>) : 'no languages'}

          maps={key.maps.googleMaps}
          key={index}
        />
      )
    })
    : ' '
  return <div className="coutrylist">{allContries}</div>
}


CountryList.propTypes = {
  filters: PropTypes.string.isRequired,
}

export default CountryList
