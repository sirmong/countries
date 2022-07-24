import React, { useState } from 'react';
import { FcSearch } from "react-icons/fc";

const input = {
    width: '300px',
    borderRadius: '15px'
}
const search = {
    width: '25px',
    height: '25px'
}

const Input = () => {

    const [country, setCountry] = useState('')

    const onChangeCountry = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div >
            <form>
                <input
                    style={input}
                    type='text'
                    placeholder='введите название....'
                    onChange={e => onChangeCountry(e)}
                    value={country}
                />
                <FcSearch
                    style={search}
                />
                {/* <img src={img} alt='img' /> */}
            </form>
        </div>

    );
};

export default Input;