import React, { useContext, useState } from 'react';
import Header from './Header';
import Input from './Input';
import UseApi from './useApi';
import CountryList from './CountryList';
import CountryItem from './CountryItem';
// import { Context } from './Context';
import './Page.css'
import Modal from './Modal';
import ModalList from './ModalList';

const Page = ({ allContries, openShow, modalShow, closeShow }) => {

    const [filters, setFilters] = useState('')
    // const { } = useContext(Context);
    const [filterCoutries, setFilterCoutries] = useState('')

    const onChangeCountry = (filters) => {
        setFilters(filters)

    }

    const onChangeFilter = (filterCoutries) => {
        setFilterCoutries(filterCoutries)
        // console.log(filterCoutries)
    }


    // const onChangeCountry = (e) => {

    //     setFilter(e.target.value)


    // }

    return (
        <div className='page'>
            <Header />
            <Input
                onChange={onChangeCountry}
                filters={filters}
            // onChangeFilter={onChangeFilter}
            // filterCoutries={filterCoutries}
            // allContries={allContries}
            />

            {/* <CountryItem
                filters={filters} /> */}
            <CountryList
                filters={filters}
            // {/* // onChange={onChangeCountry} */}
            // {/* // onChangeFilter={onChangeFilter} */}
            // {/* // filterCoutries={filterCoutries} */}
            />


        </div>
    );
};

export default Page;