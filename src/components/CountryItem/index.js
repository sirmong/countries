/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function CountryItem({
    country,
    flags,
    capital,
    population,
    region,
    languages,
    maps,
}) {

    return (
        <div>
            <img alt={flags} src={flags} className="flags" />
            <div className="countries">
                <p className="country">
                    <span>Страна: {country}</span>
                    <br />
                    <span> Столица: {capital}</span>
                    <br />
                    <span>Население: {population} человек</span>
                    <br />
                    <span>Регион: {region}</span>
                    <br />

                    <span>
                        Карта:&ensp;
                        <a href={maps} target="_blank" rel="noreferrer">
                            {country}
                        </a>
                    </span>
                </p>
                <div>Язык: {languages}</div>
            </div>
        </div>
    )
}

CountryItem.propTypes = {
    country: PropTypes.string.isRequired,
    flags: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    capital: PropTypes.array,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    maps: PropTypes.string.isRequired

}

export default CountryItem
