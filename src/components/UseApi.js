import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
import axios from 'axios';


const UseApi = () => {
    const BASE = 'https://restcountries.com/v2/all'
    const [countries, setCoutries] = useState('')


    const getAllCountries = async () => {
        const result = await axios(
            `${BASE}`,
        );
        setCoutries(result.data);
        console.log(result.data)
        // return result.data.results.map(_transformCountries);



    };


    useEffect(() => {
        getAllCountries()
    }, [])

    // const _transformCountries = (count) => {
    //     return {
    //         id: count.id,
    //         name: count.name,
    //         flag: count.flag.svg
    //     }

    // }

    return { getAllCountries }
};

export default UseApi;