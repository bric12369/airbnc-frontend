import PropertyList from "./PropertyList"


const HomePage = ({ properties, setProperties }) => {

    return (
        <div id='homePage'>
            <h2>Homepage</h2>
            <PropertyList properties={properties} setProperties={setProperties}/>
        </div>
    )
}

export default HomePage