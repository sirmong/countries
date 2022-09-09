


import React, { useState } from 'react'
import Header from '../Header'
import Input from '../CountryAddForm'
import CountryList from '../CountryList'



function Page() {
  const [filters, setFilters] = useState('')


  // eslint-disable-next-line no-shadow
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
