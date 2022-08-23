import React, { useState } from 'react'
import Header from '../Header/Header'
import Input from '../CountryAddForm/Input'
import CountryList from '../CountryList/CountryList'
// import { Context } from './Context';
import './Page.css'

const Page = () => {
  const [filters, setFilters] = useState('')


  const onChangeCountry = (filters) => {
    setFilters(filters)
  }


  return (
    <div className="page">
      <Header />
      <Input onChange={onChangeCountry} filters={filters} />

      <CountryList filters={filters} />
    </div>
  )
}

export default Page
