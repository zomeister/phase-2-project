import React from 'react';


function Form ( {name, country, zipcode, city} ) {
    //const [state, setState] = useState(null);

    return (
        <div id="form" className="weather-form">
            <form>
            <label>
            Name:
            <input type="text" name="name" />
            Country:
            <input type="text" name="country" />
            Zipcode:
            <input type="number" name="zipcode" />
            State:
            <input type="text" name="state" />
            City:
            <input type="text" name="city" />
            </label>    
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;