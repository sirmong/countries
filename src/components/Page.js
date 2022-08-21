import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import CountryList from './CountryList'
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
