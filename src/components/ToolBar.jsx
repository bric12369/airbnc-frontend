
const ToolBar = ({ filters, setFilters }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id='toolBar'>
            <h3>Filters:</h3>
            <form onSubmit={handleSubmit}>
                <label>Sort by:
                    <select name="sort" id="id">
                        <option value="">Recommended</option>
                        <option value="price_per_night">Price high to low</option>
                        <option value="price_per_night&dir=asc">Price low to high</option>
                    </select>
                </label>
                <label>Property type:
                    <select name="property_type" id="property_type">
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
                    <input type="number" min='50' />
                </label>
                <label>Min price:
                    <input type="number" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ToolBar