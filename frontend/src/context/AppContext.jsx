import React from "react";

export const AppContext = React.createContext({
    url: 'https://b-headline.onrender.com/api/',
    headline: '',
    setHeadline: () => {},
    showCms: '',
    setCms: () => {}
})