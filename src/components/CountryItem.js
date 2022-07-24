import React from 'react';
import CountryList from './CountryList';
import UseApi from './UseApi';

const CountryItem = ({ country, flags }) => {



    return (
        <div>
            <CountryList country={country} />
            {/* {flags} */}
            {/* {country} */}

        </div>
    );
};

export default CountryItem;