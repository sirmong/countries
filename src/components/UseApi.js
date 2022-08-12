import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
import axios from 'axios';


const useApi = () => {
    const NAME = `a`
    const NAMEZ = `z`
    const [countries, setCoutries] = useState([])

    const BASE = `https://restcountries.com/v3.1/name/${NAME}`



    const getAllCountries = async () => {
        const result = await axios(
            `${BASE} `,
        );
        // result.sort((a, b) => a.name.common > b.name.common)
        setCoutries(result.data);
        console.log(result.data)
        // return result.data.results.map(_transformCountries);



    };


    useEffect(() => {
        getAllCountries()
    }, [])


    return { countries }
};

export default useApi;