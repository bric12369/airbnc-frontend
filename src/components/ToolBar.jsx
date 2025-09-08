import { useState } from "react"
import { propertyTypes } from '../utils/filterOptions'


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

    const handleResetFilters = (e) => {
        e.preventDefault()
        setFilters({})
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
                        {propertyTypes.map((type) => {
                            return <option key={type} value={type}>{type}</option>
                        })}
                    </select>
                </label>
                <label>Max price:
                    <input type="number" min='50' name='max_price' onChange={handleSelect} />
                </label>
                <label>Min price:
                    <input type="number" name='min_price' onChange={handleSelect} />
                </label>
                <button>Submit</button>
                <button type='reset' onClick={handleResetFilters}>Reset filters</button>
            </form>
        </div>
    )
}

export default ToolBar