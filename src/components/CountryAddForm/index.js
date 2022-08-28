/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useApi from '../../hook/UseApi'

import './index.css'

function Input({ onChange, filters }) {
  const { countries } = useApi()
  const [filter, setFilter] = useState('')
  // eslint-disable-next-line react/prop-types
  const filterCoutries = countries.filter((country) => country.name.common.toLowerCase().includes(filters.toLowerCase()))

  const onChangeCountry = (e) => {
    e.preventDefault()
    setFilter(e.target.value)
    onChange(e.target.value)

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
    <div className="form">
      <form className="search-form">
        <input
          className="input"
          type="text"
          placeholder="введите название...."
          onChange={onChangeCountry}
          onClick={inputClickHandler}
          value={filter}
        />

        <ul className="autocomplete" onChange={onChangeCountry}>
          {filter && isOpen
            // eslint-disable-next-line no-unused-vars
            ? filterCoutries.map((key, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                className="autocomplete-item"
                onClick={itemClickHandler}
                key={index}
              >
                {key.name.common}
              </li>
            ))
            : null}
        </ul>
      </form>
    </div>
  )
}

Input.propTypes = {
  filters: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Input.defaultProp = {
  className: '',
}

export default Input
