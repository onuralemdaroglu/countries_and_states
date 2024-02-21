import React from "react";

const AddState = () => {

    return (
        <>
            <div>
            <input type="text" placeholder="Add a State"></input>
                <button type="submit" className="addBtn" id="btn"
                style={
                    {backgroundColor:'black', 
                    color:'white', 
                    borderRadius:'5px', 
                    marginRight:'1rem'
                }}>Add State</button>
            </div>
        </>
    )  
}

export default AddState;