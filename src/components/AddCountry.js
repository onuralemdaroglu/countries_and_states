import React, { useState } from "react";
import axios from 'axios';

const AddCountry = () => {

    const [newCountryName, setNewCountryName] = useState('');
    const [newCountryCode, setNewCountryCode] = useState('');

        const newCountry = async () => {
                
                await axios.post('http://127.0.0.1:8000/countries/', {
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
                    pattern="[A-Za-z]"
                    placeholder="Country Name...">
                </input>
                <input 
                    type="text" 
                    id="addCountryCode" 
                    value={newCountryCode}
                    onChange={(e)=> setNewCountryCode(e.target.value.toUpperCase())} 
                    maxLength='2' minLength='2' 
                    pattern="/^[a-zA-Z]+$/"
                    placeholder="Country Code...">
                </input>
                <button 
                    type="submit" 
                    className="addBtn" 
                    id="btn" onClick={newCountry}
                style={
                    {backgroundColor:'black', 
                    color:'white', 
                    borderRadius:'5px', 
                    marginRight:'1rem',
                    height: '2rem' 
                }}
                >Add Country
                </button>
             </div>
        </>
    )
}

export default AddCountry;
