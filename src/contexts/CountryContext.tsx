import React, { useReducer } from 'react';
import { CountryReducer, initialState, stateType } from './countryReducer';

type AppProps = {
    children: React.ReactNode;
}

const CountryStateContext = React.createContext<stateType | null>(null)
const CountryDispatchContext = React.createContext<any | null>(null)

export function useCountryState() {
    const context = React.useContext(CountryStateContext)
    if (context === undefined) {
        throw new Error("useCountryState must be used within a Country Provider")
    }

    return context
}

export function useCountryDispatch() {
    const context = React.useContext(CountryDispatchContext)
    if (context === undefined) {
        throw new Error("useCountryState must be used within a Country Provider")
    }

    return context
}

export const CountryProvider = ({children}: AppProps) => {
    const [state, dispatch] = useReducer(CountryReducer, initialState)

    return (
        <CountryStateContext.Provider value={state}>
            <CountryDispatchContext.Provider value={dispatch}>
                {children}
            </CountryDispatchContext.Provider>
        </CountryStateContext.Provider>
    )
}