import { Country, State, City } from 'country-state-city';
import { useState, useMemo, useEffect } from 'react';

const useCountryStateCity = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const setSelectedCountryByCode = (countryCode) => setSelectedCountry(() => {
        if (!countryCode) 
            return null;
        const entry = Country.getCountryByCode(countryCode);
        if (!entry) {
            console.error(`${countryCode} is not a valid country code.`);
            return null;
        }
        return entry;
    });

    const setSelectedProvinceByCode = (provinceCode) => setSelectedProvince(() => {
        const countryCode = selectedCountry?.isoCode;
        if (!countryCode || !provinceCode) 
            return null;
        const entry = State.getStateByCodeAndCountry(provinceCode, countryCode);
        if (!entry) {
            console.error(`${provinceCode}-${countryCode} is not a valid province-country code pair.`);
            return null;
        }
        return entry;
    });

    const setSelectedCityByCode = (cityName) => setSelectedCity(() => {
        const countryCode = selectedCountry?.isoCode;
        const provinceCode = selectedProvince?.isoCode;
        if (!countryCode || !provinceCode || !cityName)
            return null;
        const citiesList = City.getCitiesOfState(countryCode, provinceCode);
        const entry = citiesList.find((e) => e.name === cityName);
        if (!entry) {
            console.error(`${cityName}, ${provinceCode}-${countryCode} is not a valid city`);
            return null;
        }
        return entry;
    });

    const countryOptions = useMemo(() => {
        return Country.getAllCountries();
    }, []);

    const provinceOptions = useMemo(() => {
        return selectedCountry ? State.getStatesOfCountry(selectedCountry.isoCode) : [];
    }, [selectedCountry?.isoCode]);

    const cityOptions = useMemo(() => {
        return (selectedCountry && selectedProvince) ? City.getCitiesOfState(selectedCountry.isoCode, selectedProvince.isoCode) : [];
    }, [selectedCountry?.isoCode, selectedProvince?.isoCode]);

    //invalidate other fields 
    useEffect(() => {
        if (!provinceOptions.includes(selectedProvince)) {
            setSelectedProvince(null);
            return;
        }
        if (!cityOptions.includes(selectedCity)) {
            setSelectedCity(null);
            return;
        }
    }, [selectedCountry?.isoCode, selectedProvince?.isoCode]);
    
    return {
        countryOptions,
        provinceOptions,
        cityOptions,
        selectedCountry,
        selectedProvince,
        selectedCity,
        setSelectedCountryByCode,
        setSelectedProvinceByCode,
        setSelectedCityByCode
    };
};

export default useCountryStateCity;