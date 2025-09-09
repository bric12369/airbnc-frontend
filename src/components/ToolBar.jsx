import { useState } from "react"
import { propertyTypes } from '../utils/filterOptions'


const ToolBar = ({ setFilters }) => {

    const [formInputs, setFormInputs] = useState({})

    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (e) => {
        const select = e.target.name
        const choice = e.target.value
        const selectedIndex = e.target.selectedIndex

        setFormInputs(prevInputs => {

            let updated = { ...prevInputs, [select]: choice }

            if (select === 'sort') {
                if (selectedIndex === 2) {
                    updated['dir'] = 'asc'
                } else {
                    const { dir, ...rest } = updated
                    updated = rest
                }
            }
            return updated
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFilters(formInputs)
    }

    const handleResetFilters = (e) => {
        e.preventDefault()
        document.getElementById('filtersForm').reset()
        setFilters({})
    }

    const handleOpenFilters = (e) => {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)
    }

    return (
        <>
            {<button onClick={handleOpenFilters}>{isOpen === false ? 'Filters' : 'Hide Filters'}</button>}
            {isOpen &&
                <div id='toolBar'>
                    <form onSubmit={handleSubmit} id='filtersForm'>
                        <label>Sort by:
                            <select name="sort" onChange={handleSelect} >
                                <option value="" defaultValue>Recommended</option>
                                <option value="price_per_night">Price high to low</option>
                                <option value="price_per_night">Price low to high</option>
                            </select>
                        </label>
                        <label>Property type:
                            <select name="property_type" onChange={handleSelect} defaultValue='' >
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
                </div>}
        </>
    )
}

export default ToolBar