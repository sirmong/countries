


import React, { useState } from 'react'
import Header from '../Header'
import Input from '../CountryAddForm'
import CountryList from '../CountryList'



function Page() {
  const [filters, setFilters] = useState('')



  const onChangeCountry = (filt) => {
    setFilters(filt)
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
