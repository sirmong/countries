import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = () => {
  const NAME = `a`
  const [countries, setCoutries] = useState([])

  const BASE = `https://restcountries.com/v3.1/name/${NAME}`

  const getAllCountries = async () => {
    const result = await axios(`${BASE} `)

    setCoutries(result.data)
    console.log(result.data)
  }

  useEffect(() => {
    getAllCountries()
  }, [])

  return { countries }
}

export default useApi
