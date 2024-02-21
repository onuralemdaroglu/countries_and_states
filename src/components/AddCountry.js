import React, { useState } from "react";
import axios from 'axios';

const AddCountry = () => {

    const [newCountryName, setNewCountryName] = useState('');
    const [newCountryCode, setNewCountryCode] = useState('');

        const newCountry = async () => {
            const response = 
                await axios.post('https://xc-countries-api.fly.dev/api/countries/', {
                    code: newCountryCode,
                    name: newCountryName
                });
                setNewCountryCode('');
                setNewCountryName('');
        }
    
    return (
        <>
            <div>
                <input 
                    type="text" 
                    id="addCountry" 
                    value={newCountryName}
                    onChange={(e)=> setNewCountryName(e.target.value)} 
                    placeholder="Add a Country">
                </input>
                <input 
                    type="text" 
                    id="addCountryCode" 
                    value={newCountryCode}
                    onChange={(e)=> setNewCountryCode(e.target.value)} 
                    placeholder="Enter your Country Code">
                </input>
                <button 
                    type="submit" 
                    className="addBtn" 
                    id="btn" onClick={newCountry}
                style={
                    {backgroundColor:'black', 
                    color:'white', 
                    borderRadius:'5px', 
                    marginRight:'1rem'
                }}
                >Add Country
                </button>
             </div>
        </>
    )
}

export default AddCountry;
