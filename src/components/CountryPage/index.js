/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import Header from '../Header'
import Input from '../CountryAddForm'
import CountryList from '../CountryList'
// import { Context } from './Context';


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
