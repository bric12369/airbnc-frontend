import { useState } from "react"
import fetchProperties from "../apiCalls"


const ToolBar = ({ setFilters }) => {

    const [formInputs, setFormInputs] = useState({})
    
    const handleSelect = (e) => {
        const select = e.target.name
        const choice = e.target.value
        setFormInputs(prevInputs => ({
            ...prevInputs,
            [select]: choice
        }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFilters(formInputs)
    }

    return (
        <div id='toolBar'>
            <h3>Filters:</h3>
            <form onSubmit={handleSubmit}>
                <label>Sort by:
                    <select name="sort" id="id" onChange={handleSelect}>
                        <option value="">Recommended</option>
                        <option value="price_per_night">Price high to low</option>
                        <option value="price_per_night&dir=asc">Price low to high</option>
                    </select>
                </label>
                <label>Property type:
                    <select name="property_type" id="property_type" defaultValue='' onChange={handleSelect} >
                        <option value='' disabled>Select an option</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Cabin">Cabin</option>
                        <option value="Castle">Castle</option>
                        <option value="Chalet">Chalet</option>
                        <option value="Cottage">Cottage</option>
                        <option value="House">House</option>
                        <option value="Loft">Loft</option>
                        <option value="Mansion">Mansion</option>
                        <option value="Studio">Studio</option>
                        <option value="Villa">Villa</option>
                    </select>
                </label>
                <label>Max price:
                    <input type="number" min='50' name='max_price' onChange={handleSelect} />
                </label>
                <label>Min price:
                    <input type="number" name='min_price' onChange={handleSelect} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ToolBar