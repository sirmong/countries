import React from 'react';
import Header from './Header';
import Input from './Input';
import UseApi from './UseApi';
import CountryList from './CountryList';
import CountryItem from './CountryItem';

const Page = () => {
    return (
        <div>
            <Header />
            <Input />
            <CountryList />
            {/* <CountryItem /> */}
            <UseApi />
        </div>
    );
};

export default Page;