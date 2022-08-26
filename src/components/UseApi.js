/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = () => {
  const NAME = `a`
  const [countries, setCoutries] = useState([])

  const BASE = `https://restcountries.com/v3.1/name/${NAME}`

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAllCountries = async () => {
    const result = await axios(`${BASE} `)

    setCoutries(result.data)
    console.log(result.data)
  }

  useEffect(() => {
    getAllCountries()
  }, [getAllCountries])

  return { countries }
}

export default useApi
