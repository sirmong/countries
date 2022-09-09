
import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = () => {

  const [countries, setCoutries] = useState([])

  const BASE = `https://restcountries.com/v3.1/all`
  useEffect(() => {
    const getAllCountries = async () => {
      const result = await axios(`${BASE} `)

      setCoutries(result.data)

    }
    getAllCountries()

  }, [BASE])

  return { countries }
}

export default useApi
