import { useEffect, useState } from "react"
import { propertyTypes } from '../utils/filterOptions'
import AnimatedButton from "./AnimatedButton"
import { useSearchParams } from "react-router"


const ToolBar = ({ setSearchParams }) => {

    const [formInputs, setFormInputs] = useState({})

    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (e) => {
        const { name, value } = e.target
        const selectedIndex = e.target.selectedIndex

        setFormInputs(prevInputs => {

            let updated = { ...prevInputs, [name]: value }

            if (name === 'sort') {
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
        setSearchParams(formInputs)
    }

    const handleResetFilters = (e) => {
        e.preventDefault()
        document.getElementById('filtersForm').reset()
        setFormInputs({})
        setSearchParams({})
    }

    const handleOpenFilters = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            {<AnimatedButton onClick={handleOpenFilters} text={isOpen === false ? 'Filters' : 'Hide Filters'} />}
            {isOpen &&
                    <form onSubmit={handleSubmit} id='filtersForm' className="Card3D">
                        <label>Sort by:
                            <select name="sort" onChange={handleSelect} className="filter" >
                                <option value="" defaultValue>Recommended</option>
                                <option value="price_per_night">Price high to low</option>
                                <option value="price_per_night">Price low to high</option>
                            </select>
                        </label>
                        <label>Property type:
                            <select name="property_type" onChange={handleSelect} defaultValue='' className="filter" >
                                <option value='' disabled>Select an option</option>
                                {propertyTypes.map((type) => {
                                    return <option key={type} value={type}>{type}</option>
                                })}
                            </select>
                        </label>
                        <label>Max price:
                            <input type="number" min='50' name='max_price' onChange={handleSelect} className="filter" />
                        </label>
                        <label>Min price:
                            <input type="number" name='min_price' onChange={handleSelect} className="filter" />
                        </label>
                        <div id='formButtons'>
                            <AnimatedButton text='Submit' />
                            <AnimatedButton text='Reset Filters' type='reset' onClick={handleResetFilters} />
                        </div>
                    </form>}
        </>
    )
}

export default ToolBar