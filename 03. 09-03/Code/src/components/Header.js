// Define a functional React component named 'Header'
function Header() {

    // Internal style object for the div element
    const bgstyle = {
        backgroundColor: 'rgb(117, 165, 117)', // Light green background color
        height: '100px',                       // Fixed height of 100 pixels
        textAlign: 'center'                    // Center-align the text horizontally
    }

    // Return JSX to render the styled header
    return (
        <div style={bgstyle}>  {/* Apply the inline styles to this div */}
            <h1>Header</h1>    {/* Display a heading with the text "Header" */}
        </div>
    )
}

// Export the Header component so it can be imported and used elsewhere
export default Header;