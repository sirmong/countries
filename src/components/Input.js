import React, { useState } from 'react';
import CountryList from './CountryList';
import { FcSearch } from "react-icons/fc";
import PropTypes from 'prop-types';
import useApi from './useApi';
import CountryItem from './CountryItem';

import './Input.css'



const Input = ({ onChange, filters }) => {

    const { countries } = useApi()
    const [filter, setFilter] = useState('')
    const filterCoutries = countries.filter(country => {
        return country.name.common.toLowerCase().includes(filters.toLowerCase())
    })

    const onChangeCountry = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
        onChange(e.target.value)
        console.log(e.target.value)
    }

    const [isOpen, setIsOpen] = useState(true)

    const itemClickHandler = (e) => {

        onChange(e.target.textContent)
        setFilter(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }



    return (
        <div className='form'>
            <form className='search-form'>
                <input
                    className='input'
                    type='text'
                    placeholder='введите название....'
                    onChange={onChangeCountry}
                    onClick={inputClickHandler}
                    value={filter}
                />

                <ul className='autocomplete'
                    onChange={onChangeCountry}
                >
                    {filter && isOpen
                        ? filterCoutries.map((key, index) => {
                            return <li
                                className='autocomplete-item'
                                onClick={itemClickHandler}
                                key={index}
                            >
                                {key.name.common}
                            </li>
                        }) : null

                    }
                </ul>

            </form>

        </div>

    );
};


Input.propTypes = {
    className: PropTypes.string
}

Input.defaultProp = {
    className: ''
}

export default Input;