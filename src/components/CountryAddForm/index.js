import React, { useState, useEffect, useRef } from 'react'
import * as uuid from "uuid";
import PropTypes from 'prop-types'
import useApi from '../../hook/UseApi'


import './index.css'

function Input({ onChange, filters }) {
  const { countries } = useApi()
  const [filter, setFilter] = useState('')


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

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);


  return (
    <div className="form">
      <form className="search-form">
        <input
          className="input"
          ref={inputElement}
          type="text"
          placeholder="введите название...."
          onChange={onChangeCountry}
          onClick={inputClickHandler}
          value={filter}
        />

        <ul className="autocomplete" onChange={onChangeCountry}>
          {filter && isOpen

            ? filterCoutries.map((key) => (



              <li role="treeitem"
                className="autocomplete-item"
                onClick={itemClickHandler}
                onKeyPress={itemClickHandler}
                key={uuid.v4()}

              >
                {key.name.common}
              </li>
            ))
            : ''}
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
