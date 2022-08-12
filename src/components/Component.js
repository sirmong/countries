import { useState } from 'react';
import { Context } from './Context';
import Page from './Page';

const Component = () => {

    const [filter, setFilter] = useState()

    return (
        <>
            <Context.Provider value={{ filter, setFilter }}>
                <Page />
            </Context.Provider>

        </>

    )
};

export default Component;