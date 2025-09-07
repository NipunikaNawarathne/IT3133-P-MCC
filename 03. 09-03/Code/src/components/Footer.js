// Import external CSS file for styling
import '../CSS/Style.css'

// Define a functional React component named 'Footer'
function Footer() {

    // Declare a constant string to hold the footer title
    const footer = "Footer"

    return (
        // Return JSX with a div styled using the 'FooterBg' class from the CSS file
        <div className="FooterBg">
            {/* Display the footer title using the constant */}
            <h1>{footer}</h1>

            {/* Display a contact number in smaller heading style */}
            <h6>Contact Number: 097265254</h6>
        </div>
    )
}

// Export the Footer component so it can be used in other parts of the app
export default Footer