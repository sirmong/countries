import React from 'react';
import CountryItem from './CountryItem';
import UseApi from './UseApi';

const CountryList = () => {
    const { getAllCountries } = UseApi()
    const allContries = Object.keys(getAllCountries).map((key, index) => {
        return <CountryItem
            country={getAllCountries[key].name[0]}

        // country={getAllCountries.name}
        // flags={key.flags}
        // key={index}
        />
    })
    // const allContries = Object.values({ getAllCountries }).map((key, index) => {
    //     return <CountryItem
    //         country={getAllCountries[key].name[0]}
    //         flags={getAllCountries[key].flags}
    //         key={index} />
    // })
    console.log(allContries)
    return (

        <div>
            {allContries}
        </div>
    );
};

export default CountryList;