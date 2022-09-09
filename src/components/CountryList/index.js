import React from 'react'
import * as uuid from "uuid";
import PropTypes from 'prop-types'
import CountryItem from '../CountryItem'
import useApi from '../../hook/UseApi'

import './index.css'

function CountryList({ filters }) {

  const { countries } = useApi()

  const filterCoutries = countries.filter((country) => country.name.common.toLowerCase().includes(filters.toLowerCase()))


  const allContries = filters
    ? filterCoutries.map((key) => (
      <CountryItem
        flags={key.flags.svg}
        country={key.name.common}
        capital={key.capital}
        population={key.population}
        region={key.region}
        languages={key.languages !== undefined ? Object.values(key.languages).map((item) => <div key={uuid.v4()}>{item}</div>) : 'no languages'}

        maps={key.maps.googleMaps}
        key={uuid.v4()}
      />
    )
    )
    : ' '
  return <div className="coutrylist">{allContries}</div>
}


CountryList.propTypes = {
  filters: PropTypes.string.isRequired,
}

export default CountryList
