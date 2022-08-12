import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import CountryList from './CountryList';
import useApi from './useApi';
import MyModal from './Modal'
import { Link } from 'react-router-dom';


import './CountryItem.css'



function CountryItem({ country, flags, filterCoutries, capital, population, currencies, region, languages, maps }) {
    const { countries } = useApi();
    const [ModalFilters, setModalFilters] = useState('');
    const [modalShow, setModalShow] = useState(false);




    return (
        <div>
            <img src={flags} className='flags' />
            <div className='countries'>

                <p className='country'>
                    <span>
                        Страна: {country}

                    </span><br />
                    <span> Столица: {capital}</span>
                    <br />
                    <span>
                        Население: {population} человек
                    </span>
                    <br />
                    <span>
                        Регион: {region}
                    </span>
                    <br />

                    <span>
                        Карта:&ensp;

                        <a href={maps} target="_blank">
                            {country}
                        </a>
                    </span>
                </p>
                <div>
                    Язык: <div>{Object.values(languages).map((item, i) => {
                        return <div >
                            {item}
                        </div>
                    })}
                    </div>
                </div>

            </div>
        </div >

    );
}

export default CountryItem;