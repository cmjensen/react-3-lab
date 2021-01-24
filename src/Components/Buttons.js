
const Buttons = (props) => {
    console.log(props)
    return(
        <div className='button-nav'>
            <button 
                className='change-card-prev'
                onClick={() => props.prevButton()}
                >Previous</button>
            <button className='blue-buttons'>Edit</button>
            <button className='blue-buttons'>Delete</button>
            <button className='blue-buttons'>New</button>
            <button 
                className='change-card-next'
                onClick={() => props.nextButton()}
                >Next ></button>
        </div>
    )
}

export default Buttons;