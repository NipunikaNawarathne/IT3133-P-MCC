// Import the external CSS file for styling
import '../CSS/Style.css'

// Define a functional component named 'Logo'
function Logo() {
    return (
        // Create a div with a class name 'LogoBg' to apply background styling
        <div className='LogoBg'>
            {/* Display an image using the require function to load it dynamically */}
            {/* Set the alt text for accessibility and apply inline height styling */}
            <img src={require('../image/R.png')} alt='phone logo' style={{ height: '100px' }} />
        </div>
    )
}

// Export the Logo component so it can be used in other files
export default Logo;