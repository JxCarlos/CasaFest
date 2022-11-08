import React from "react";

export const AmariloContext = React.createContext({});

const AmariloProvider = (props) => {
    const {children, ...value} = props;

    return (
        <AmariloContext.Provider value={value}>
            {children}
        </AmariloContext.Provider>
    )
}

export { AmariloProvider };