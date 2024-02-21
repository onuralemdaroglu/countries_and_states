import { useState, useEffect } from "react";

const CountriesStates = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    // Store the selected country in a new state
    const [selectedCountryCode, setSelectedCountryCode ] = useState('');
    
    useEffect(() => {
        fetch('https://xc-countries-api.fly.dev/api/countries/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.sort((a,b) => {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 //- ( a.id - b.id && b.name.localeCompare(a.name) ); 
                })
                setCountries(data);
                //console.log(data);
                setSelectedCountryCode(data[0].code);
                //console.log(data[0].code); 
            })
    }, []);


    useEffect(() => {
            if(selectedCountryCode === '') {
                setStates([]);
                return;
            } 
            fetch(`https://xc-countries-api.fly.dev/api/countries/${selectedCountryCode}/states/`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setStates(data);
                    //console.log(countries);
                });          
    }, [selectedCountryCode]);


    const HandleSelect = (e) => {
        setSelectedCountryCode(e.target.value);
    }

    return (
        <>
            <div>
                <select 
                    name='countries' 
                    id='countries' 
                    placeholder={'Select Country'}
                    onChange={HandleSelect} 
                    
                    style={{backgroundColor:'black', color:'white', borderRadius:'5px', fontSize:'1.3rem', marginRight:'3rem'}}
                >
                {   
                    countries.map((country) => (                    
                            <option key={country.id} value={country.code}>{country.name}</option>
                    ))
                }
                </select>         
            </div>
            {!!states.length &&
            <div>
                <select 
                    name='states' 
                    id='states' 
                    placeholder='Select Country'
                    style={{backgroundColor:'black', color:'white', borderRadius:'5px', fontSize:'1.3rem', marginRight:'3rem'}}>
                {   
                    states/* .sort((a,b) => {
                        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                    }) */
                    .map((state) => (  
                            <option key={state.id}>{state.name}</option>                   
                    ))
                }
                </select>   
            </div>
            }
        </>
    );
};

export default CountriesStates;
