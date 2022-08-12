import React, { useState } from 'react';
import CountryItem from './CountryItem';
import Input from './Input'
import ReactTooltip from 'react-tooltip';
import useApi from './useApi';

import './CountryList.css'
const CountryList = ({ filters }) => {
    const { countries } = useApi()

    const filterCoutries = countries.filter(country => {
        return country.name.common.toLowerCase().includes(filters.toLowerCase())
    })
    console.log(filterCoutries)
    // sort((a, b) => a.name.common.localeCompare(b.name.common))
    const allContries = filters ? filterCoutries.map((key, index) => {

        return <CountryItem
            flags={key.flags.svg}
            country={key.name.common}

            capital={key.capital}
            population={key.population}
            region={key.region}
            languages={key.languages}
            maps={key.maps.googleMaps}
            // currencies={key.currencies}
            // area={key.area}
            // country={getAllCountries.name}

            key={index + 1}
        />

    }) : null

    console.log(allContries)


    return (

        <div className='coutrylist'>
            {allContries}

        </div>
    );
};

export default CountryList;