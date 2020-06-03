import { createContext } from "react";

let UserContext = createContext({
    lang: 'en',
    toggleLang: () => {},
    registerLangListener: () => {},
    unregisterLangListener: () => {}
})