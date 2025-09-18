
const Loading = ({ msg }) => {

    return(
        <div id="spinnerContainer">
            <div id="spinner"></div>
            <p>{msg}</p>
        </div>
    )

}

export default Loading