import React,{useState} from 'react';


function Form ( {name, country, zipcode, city} ) {
    const [newName, setNewName] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newZipcode, setNewZipcode] = useState('')
    const [newState, setNewState] = useState('')
    const [newCity, setNewCity] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        
        const newData ={
            name: newName,
            country: newCountry,
            zipcode: newZipcode,
            state: newState,
            city: newCity
        }
        console.log(newData)
    }

    return (
        <div id="form" className="weather-form">
            <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input 
                type="text" 
                name="name" 
                value={newName} 
                onChange = {(e) => setNewName(e.target.value)}
            />
            Country:
            <input 
                type="text" 
                name="country" 
                value={newCountry}
                onChange = {(e) => setNewCountry(e.target.value)}
            />
            Zipcode:
            <input 
                type="number" 
                name="zipcode" 
                value={newZipcode}
                onChange = {(e) => setNewZipcode(e.target.value)}
            />
            State:
            <input 
                type="text" 
                name="state" 
                value={newState}
                onChange = {(e) => setNewState(e.target.value)}
            />
            City:
            <input 
                type="text" 
                name="city" 
                value={newCity}
                onChange = {(e) => setNewCity(e.target.value)}
            />
            </label>    
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;