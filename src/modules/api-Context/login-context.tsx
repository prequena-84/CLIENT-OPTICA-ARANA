import React, { createContext, useState } from 'react';
import type { ILoginContext } from '../../interface/api-context/ILogin-context';

const defaultContextValue: ILoginContext = {
    dataLogin: {
        userName: '',
        password: '',
        token: '',
    },
    setDataLogin: () => {},
};

export const DataContext = createContext(defaultContextValue);

const DataProvider: React.FC<ILoginContext> = ( {children, key = undefined} ) => {

    const [ dataLogin, setDataLogin ] = useState({
        userName:'',
        password:'',
        token:'',
    });

    return (
        <DataContext.Provider key={key} value={ {dataLogin, setDataLogin} }>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;