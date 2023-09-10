import React from 'react';
import config from "../appConfig.json";

const SideNavContext = React.createContext();

const sideNavSettings = [
    { "path": "/account-info" },
    { "path": "/vendor-info" },
    { "path": "/certificate" },
    { "path": "/product-info-edit-add-product" },
    { "path": "/upload-multiples" },
    { "path": "/history" },
    { "path": "/inquiry" },
    { "path": "/certificate" },
    { "path": "/inquiry-item" },
];

function SideNavProvider({ children }) {
    const makeSideNavProps = (propsArray) => propsArray.map((s, i) => {
        let ret = Object.assign(sideNavSettings[i], s);
        ret.onClick = (evt) => window.location.pathname = s['path']
        return ret;
    });

    const value = { 
        makeSideNavProps,
        sideNavSettings: config.sideNavSettings
    };
    return <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>
}
export { SideNavContext, SideNavProvider };