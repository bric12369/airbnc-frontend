import PropertyList from "./PropertyList"


const HomePage = ({ properties, setProperties }) => {

    return (
        <div id='homePage'>
            <PropertyList properties={properties} setProperties={setProperties}/>
        </div>
    )
}

export default HomePage