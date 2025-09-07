// Define a functional React component named 'Body' that receives props
function Body(props) {
    return (
        // Create a div with inline styling for background color
        <div style={{ backgroundColor: '#7d8ab1ff' }}>  

            {/* Optional heading using props.content (currently commented out) */}
            {/* <h1>{props.content}</h1> */}

            {/* Static heading text */}
            <h1>Body</h1>

            {/* Display the 'content' prop passed to the component */}
            <h2>{props.content}</h2>

            {/* Display the 'title' prop passed to the component */}
            <h3>{props.title}</h3>

            {/* Descriptive paragraph about Mobile Communication and Computing */}
            <p>
                Mobile Communication and Computing is the field that combines mobile technology with computing power, 
                allowing users to perform computing tasks while on the move. It encompasses mobile devices such as 
                smartphones, tablets, laptops, and wearable technology, which are all capable of connecting to wireless networks. 
                These devices enable users to access the internet, send messages, make voice or video calls, and run a wide range 
                of applications from virtually anywhere. This mobility and constant connectivity have revolutionized the way 
                people communicate and work.   
            </p>
        </div>
    )
}

// Export the Body component so it can be imported and used in other files
export default Body;