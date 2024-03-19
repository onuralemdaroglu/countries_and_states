import React, { useState, useEffect } from "react";
import axios  from "axios";

const AddState = () => {
    const [countries, setCountries] = useState([]);

    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [newStateName, setNewStateName] = useState('');
    const [newStateCode, setNewStateCode] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/countries/')
            .then((res => res.json()
            ))
            .then((data) => {
                data.sort((a,b) => {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                })
                setCountries(data);
                //console.log(data);
                setSelectedCountryId(data[0].id)
                //console.log(data[0].id);
            })

    }, []);

   /*  useEffect(() =>{
        console.log(selectedCountryId);
    },[selectedCountryId] )
    */

    const newState = async () => {
        
            await axios.post('http://127.0.0.1:8000/states/', {
                countryId: selectedCountryId,
                code: newStateCode,
                name: newStateName
            });
    }

    return (
        <>
            <div>
                <div className="stateCountrySelect">
                <h3 className="selectCountry">Select Country</h3>
                <select 
                    name='countries' 
                    id='countries' 
                    placeholder={'Select Country'}
                    onChange={(e) => setSelectedCountryId(e.target.value)} 
                    
                    style={{backgroundColor:'black', color:'white', borderRadius:'5px', fontSize:'1rem', height: '2.2rem'}}
                >
                {   
                    countries.map((country) => (                    
                            <option key={country.id} value={country.id}>{country.name}</option>
                    ))
                }
                </select> 
                </div> 
            <input 
                type="text" 
                placeholder="Add a State"
                value={newStateName}
                onChange={(e) => setNewStateName(e.target.value)} >
            </input>
            <input 
                type="text" 
                placeholder="Add a State Code"
                value={newStateCode}
                onChange={(e) => setNewStateCode(e.target.value.toUpperCase())}
                maxLength='2' minLength='2' 
                pattern="/^[a-zA-Z]+$/">
            </input>
                <button 
                    type="submit" 
                    className="addBtn" 
                    id="btn"
                    value={selectedCountryId}
                    onClick={newState}
                    style={
                        {backgroundColor:'black', 
                        color:'white', 
                        borderRadius:'5px', 
                        marginRight:'1rem',
                        height: '2.2rem' 
                    }}>
                    Add State
                </button>
            </div>
        </>
    )  
}

export default AddState;